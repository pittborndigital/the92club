import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'sanitize.css'

import SceneManager from 'component/Scenes/SceneManager'
import createStore from 'store/createStore'
import registerServiceWorker from 'module/registerServiceWorker'

import './index.css'

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <SceneManager />
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
