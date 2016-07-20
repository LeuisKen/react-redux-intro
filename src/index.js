import React from 'react'
import ReactDOM from 'react-dom'
import dva, { connect } from 'dva';
import { put } from 'dva/effects';
import { Router, Route } from 'dva/router';

import App from './app'

// 1. Initialize
const app = dva();

// 2. Model
app.model({
  namespace: 'list',
  state: {
    list: []
  },
  effects: {
    ['list/fetchData']: [function*() {
      const res = yield fetch(`https://api.github.com/users/facebook/repos`)
        .then(res => res.json())

      yield put({
        type: 'list/setData',
        list: res
      })
    }, { type: 'takeLatest' }]
  },
  reducers: {
    ['list/fetchData'](state) {
      return { ...state }
    },
    ['list/setData'](state, { list }) {
      state.list = list
      return { ...state }
    }
  },
});

// 3. View
const View = connect(({ list }) => ({
  list: list.list
}))(App);

// 4. Router
app.router(({ history }) =>
  <Router history={history}>
    <Route path="/" component={View} />
  </Router>
);

// 5. Start
app.start(document.getElementById('root'));
