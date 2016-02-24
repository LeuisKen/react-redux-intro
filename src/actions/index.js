import fetch from 'isomorphic-fetch'
import api from 'SRC/api'

import { SET_SEARCH_KEY, RECEIVE_DATA } from 'SRC/constants'

export function setSearchKey(category, key) {
  return {
    type: SET_SEARCH_KEY,
    category,
    key
  }
}

function receiveData(use, json) {
  return {
    type: RECEIVE_DATA,
    use: use,
    data: json
  }
}

function fetchData(main, use) {
  const { keySet } = main.toJS()

  let url = api[use](keySet[use])

  return dispatch => {
    return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveData(use, json)))
  }
}

export function fetchAll(use) {
  return (dispatch, getState) => {
    const { main } = getState()
    return dispatch(fetchData(main, use))
  }
}
