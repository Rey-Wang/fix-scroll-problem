const RxJs = require('rxjs')
const chalk = require('chalk')
const inquirer = require('inquirer')

const fuzzy = require('fuzzy')

const config = require('../../inject-config.js')
const allApps = require('./listAllApps')

module.exports = class Prompt {
  constructor(mode = 'default') {
    this.prompts = new RxJs.Subject()
    inquirer.registerPrompt(
      'autocomplete',
      require('inquirer-autocomplete-prompt')
    )
    this.inquirer = inquirer.prompt(this.prompts)
    this.deploy = mode === 'deploy'
  }

  done() {
    this.prompts.complete()
  }

  async chooseApp(defaultApp) {
    // if we are in deploy mode, add 'storybook' as an option
    if (this.deploy) {
      allApps.push('storybook')
    }

    if (allApps.includes(defaultApp)) {
      return defaultApp
    } else {
      return this._addQuestion({
        type: 'autocomplete',
        name: 'app',
        message: 'Choose an app:',
        pageSize: 20,
        source: (answers, input) => {
          const result = fuzzy
            .filter(input || '', allApps)
            .map(el => el.original)
          return Promise.resolve(result)
        },
      })
    }
  }

  async chooseEnv(app, defaultEnv) {
    if (app in config && defaultEnv in config[app]) {
      return config[app][defaultEnv]
    } else {
      if (app in config) {
        const envs = getEnvChoices(app)

        return this._addQuestion({
          type: 'autocomplete',
          name: 'env',
          message: 'Choose an environment to run in:',
          choices: getEnvChoices(app),
          default: getDefaultEnvChoice(app),
          source: (answers, input) => {
            const result = fuzzy
              .filter(input || '', envs, {
                extract: el => el.name,
              })
              .map(el => el.original)
            return Promise.resolve(result)
          },
        })
      } else {
        return {}
      }
    }
  }

  // Below this is internal shit...

  async _addQuestion(question) {
    return new Promise(resolve => {
      this.inquirer.ui.process.subscribe(
        ({ name, answer }) => {
          if (name === question.name) {
            resolve(answer)
          }
        }
      )
      this.prompts.next(question)
    })
  }
}

function getEnvChoices(app) {
  if (app in config) {
    return Object.entries(config[app]).map(
      ([env, config]) => ({
        value: config,
        name: getChalkColor(env)(
          capitalizeFirstLetter(env)
        ),
      })
    )
  } else {
    return []
  }
}

function getDefaultEnvChoice(app) {
  return getEnvChoices(app).findIndex(({ name }) =>
    name
      .toLowerCase()
      .includes(process.env.NODE_ENV || 'development')
  )
}

function getChalkColor(env) {
  switch (env) {
    case 'production':
      return chalk.red
    case 'demo':
    case 'test':
      return chalk.yellow
    case 'development':
    default:
      return chalk.green
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
