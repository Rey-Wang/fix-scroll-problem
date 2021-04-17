<img src="/src/lib/images/depot-logo.svg?sanitize=true" width="400">

Depot is the [Next Trucking](http://www.nexttrucking.com) front-end monorepo, built with the following technologies:

- [React](https://github.com/facebook/react)
- [Babel 6](http://babeljs.io)
- [PostCSS](https://preset-env.cssdb.org/features)
- [Webpack](http://webpack.github.io) for bundling
- [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/)
- [React Transform](https://github.com/gaearon/react-transform-hmr) for hot reloading React components in real time.
- [Storybook](https://storybook.js.org/) for developing a living style guide of our UI components. More info in our [Storybook Docs](docs/Storybook.md) section.

### Usage

```
yarn install
yarn start
```

### Linting

ESLint with React linting options have been enabled.

`yarn js` will run eslint and fix errors automatically if possible

`yarn css` will run stylelint and fix errors automatically if possible

Adding a `--fix` argument to the end of either of these will attempt to automatically fix some errors.

### Testing

Jest is setup with 2 ways to test. single-run, and "watch" mode.

Running `yarn test` will run a full test and lint suite, and save coverage data to the `./coverage` directory. Coverage information output to console will include a percentage of coverage for ALL files in the entire repo.

Running `yarn watch` will start a watching daemon that will **only run the files that have changed since last commit** by default. No coverage data will be collected in this mode as it takes significantly longer.

### Debugging

Debug a test using [ndb](https://github.com/GoogleChromeLabs/ndb)

Add the following lines in tests to put a break point

```
debugger
```

Run this command which will open up chrome dev tools.

```
ndb yarn test unit TEST_NAME
```

go ahead and debug!

Use the [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) and [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) Chrome extensions when debugging for more insight into the redux and component state.

### Building

Build static assets, minified and gzipped.

```
yarn build
```

### Test Build

Run a local server to test production build

```
yarn prod
```

including the flag `--build` will re-build the app before serving it up.

### Deploying

Deploys are handled in a CircleCI pipeline.

To deploy, first create a PR and merge to master.

Deploys to `dev` and `test` are pushed automatically.

If you need to deploy to `demo` or `prod`, find your build in the CircleCI UI and load the workflow.

Once you're on the workflow screen find the app you wish to promote, click it, and then `approve`.

### App configuration

In the `inject-config.js` file in the root directory, there is an object that defines what will be "injected" into each app at build time.

Put all API hostnames, or anything else that you want to change depending on if you are building for "test", "development", "production", etc...

They will be "injected" into the `process.env.*` spots at build time. So in the following example config, `process.env.API_HOSTNAME` will be replaced with `"http://192.168.1.1:8080"` in the "exceptions" app during development:

```javascript
module.exports = {
  dashboard: {
    development: {
      API_HOSTNAME: 'http://192.168.1.1:8080',
    },
    production: {
      API_HOSTNAME: 'http://api.example.com',
    },
  },
}
```

Additional environments can be added as often as you want, but deploys will use the defined environments for their deployment (so deploying to `admin-dev` will use the config located under "development")

### Shared CSS and React Components

Shared files located in the `lib` directory have been aliased by webpack and can be imported by using a shortcut.

For example, to import a shared React Component from `lib/components`:

```javascript
import ImageLoad from 'lib/components/ImageLoad'
```

Shared CSS files located in `lib/css` can be imported into specific component css files from `lib/css/{name}`, for example:

```
@import 'lib/css/variables';
```

You can also import shared css files into a javascript file directly to reduce duplication:

```javascript
import forms from 'lib/css/forms.css'
```

Common images located in `lib/images` can be imported in both javascript and css files:

```javascript
import logo from 'lib/images/logo-black.svg'
```

```css
background: white url('Images/arrow_gray.svg') no-repeat 90%
  50%;
```

### Component Generator

You can use `yarn gen [generatorName]` to generate a new component in the correct format.

To create a React class "view" component run `yarn gen view` and answer the promts.

To create a stateless functional component run `yarn gen func` and answer the promts.

Possible generators are located in the `_templates/gen` folder. Read the readme.md in each one to understand what they do and how they work.

### Advanced Test command

The `yarn test` command has some flags for custom options. It's rare that anyone should have to use these, but they are nice to have if you want/need them.

- `nocoverage` - disables coverage reporting (speeds up test runs)
- `eslint` - runs JUST eslint
- `stylelint` - runs JUST stylelint
- `lint` - runs both eslint and stylelint
- `unit` - runs JUST unit tests

Any additional flags will be passed through to `jest` unchanged. The possible options can be found [here](https://jestjs.io/docs/en/cli).

### Tools

`yarn depcheck` - Depcheck is a tool for analyzing the dependencies in a project to see: how each dependency is used, which dependencies are useless, and which dependencies are missing from `package.json`
