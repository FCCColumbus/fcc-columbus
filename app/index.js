import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { isProd } from 'helpers/utils'
import * as reducers from 'redux/modules'
import getRoutes from 'config/routes'

import 'font-awesome/css/font-awesome.min.css'
import 'sharedStyles/theme.scss'

const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(store)}
  </Provider>,
  document.getElementById('app')
)
