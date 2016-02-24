import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistory } from 'react-router-redux'

import DevTools from './DevTools'

import 'SRC/assets/style/antd.css'
import 'SRC/assets/style/font-awesome.css'
import 'SRC/assets/style/style.css'

import configureStore from 'SRC/store'

import { Base, Home, Forks, Pulls } from 'SRC/pages'

const reduxRouterMiddleware = syncHistory(hashHistory)
const store = configureStore()
reduxRouterMiddleware.listenForReplays(store)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={hashHistory} onUpdate={() => {window.scrollTo(0, 0)}}>
            <Route path="/" component={Base}>
              <IndexRoute component={Home}/>
              <Route path="forks" component={Forks}/>
              <Route path="pulls" component={Pulls}/>
            </Route>
          </Router>
          { (process.env.NODE_ENV === 'production') ? null : <DevTools /> }
        </div>
      </Provider>
    )
  }
}
