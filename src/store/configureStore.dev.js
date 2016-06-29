import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { syncHistory } from 'react-router-redux'
import { hashHistory } from 'react-router'
import reducer from '../reducers'

const reduxRouterMiddleware = syncHistory(hashHistory)

const finalCreateStore = compose(
  applyMiddleware(thunk),
  applyMiddleware(reduxRouterMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)


export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers').default)
    })
  }

  return store
}
