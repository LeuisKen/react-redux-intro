import Immutable from 'immutable'

var initialState = Immutable.fromJS({
  keySet: {},
  dataSet: {}
})

export default function (state = initialState, action) {
  let map = {
    SET_SEARCH_KEY: function() {
      let keySet = state.get('keySet').toJS()
      keySet[action.category] = action.key
      return state.set('keySet', Immutable.fromJS(keySet))
    },
    RECEIVE_DATA: function() {
      let dataSet = state.get('dataSet').toJS()
      dataSet[action.use] = action.data
      return state.set('dataSet', Immutable.fromJS(dataSet))
    }
  }

  if (map[action.type]) {
    return map[action.type]()
  } else {
    return state
  }

}
