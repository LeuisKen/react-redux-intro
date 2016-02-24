// import createHistory from 'history/lib/createHashHistory'
import { routeReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import main from './main.reducer'

const rootReducer = combineReducers(Object.assign({}, {
  main,
  routing: routeReducer
}));

export default rootReducer
