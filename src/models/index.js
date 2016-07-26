import { put } from 'dva/effects';

export default {
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
    ['list/setData'](state, { list }) {
      state.list = list
      return { ...state }
    }
  }
}
