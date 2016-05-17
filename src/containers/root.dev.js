import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import rootRoute from '../routes'
import DevTools from './devTools'
import { Router } from 'react-router'

export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={rootRoute} />
          {"root.dev.js"}
          <DevTools />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}