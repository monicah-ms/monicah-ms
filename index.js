import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './src/containers/root'
import configureStore from './src/store/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
console.log(process.env.NODE_ENV === 'production');



/*
 *  Main Component를 render하기 위한 function
 *
 */
render(
  <Root store={store} history={history} />,
  document.getElementById('app')
)
