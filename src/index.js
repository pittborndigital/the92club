import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './component/App'
import createStore from './store/createStore'
import registerServiceWorker from './module/registerServiceWorker'

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
