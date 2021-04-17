import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { PersistGate } from 'lib/store'
import { hideOverlay } from 'lib/services/helpers'
import NextAmplitude from 'lib/services/NextAmplitude'
import { createBrowserHistory } from 'history'

import rootReducer from './reducers/rootReducer'
import { FEATURE_FLAG_DEFAULTS } from 'lib/constants/FeatureFlags'
import { monitorFeatureFlags } from 'lib/actions/featureFlags'

import Routes from './Routes'

// import 'lib/css/kendo.css'
// import 'lib/css/global.css'
import Modal from 'antd/lib/modal/Modal'
import 'antd/dist/antd.less'

declare let BASE_NAME: string

// Transitional code for the migration from /trips to /freight. To be removed when the app is renamed.
const baseName =
  location.pathname.split('/')[1] === 'freight'
    ? BASE_NAME.replace(/^trips/, 'freight')
    : BASE_NAME

const history = createBrowserHistory({
  basename: `/${baseName}`,
})
const store = configureStore(
  rootReducer(history),
  undefined,
  { whitelist: ['createContainerOrder'] },
  history
)

store.dispatch(monitorFeatureFlags(FEATURE_FLAG_DEFAULTS))

interface Props {}
interface State {}

// use a class to ensure HMR works properly, this would normally be a stateless component
// eslint-disable-next-line react/prefer-stateless-function
export default class Root extends React.Component<
  Props,
  State
> {
  render() {
    return (
      <>
        <Modal visible={true} />
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
        <div>ppppppp</div>
      </>
    )
    // hideOverlay()
    // return (
    //   <Provider store={store}>
    //     <NextAmplitude>
    //       <PersistGate>
    //         <ConnectedRouter history={history}>
    //           <Routes />
    //         </ConnectedRouter>
    //       </PersistGate>
    //     </NextAmplitude>
    //   </Provider>
    // )
  }
}
