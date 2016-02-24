import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import { syncHistory, routeReducer } from 'react-router-redux'
import { hashHistory } from 'react-router'

const reduxRouterMiddleware = syncHistory(hashHistory)

const finalCreateStore = compose(
  applyMiddleware(thunk),
  applyMiddleware(reduxRouterMiddleware)
)(createStore);


export default function configureStore(initialState) {
  return finalCreateStore(reducer, initialState);
}
