import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { connectRoutes } from 'redux-first-router'

import reducers from './reducers'
import routesMap from './routesMap'

/* eslint-disable no-underscore-dangle */

export default () => {
  const history = createHistory()
  const { reducer, middleware, enhancer } = connectRoutes(history, routesMap)

  const rootReducer = combineReducers({
    ...reducers,
    location: reducer,
  })

  const middlewares = applyMiddleware(middleware)
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(rootReducer, composeEnhancers(enhancer, middlewares))
}
