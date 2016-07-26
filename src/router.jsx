import React from 'react'
import { Router, Route } from 'dva/router';

import TableContainer from './containers/TableContainer'

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={TableContainer} />
    </Router>
  );
};
