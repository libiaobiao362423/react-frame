import { handleActions } from 'redux-actions'

export const topic = handleActions({
  'fetch topic list request': (state, payload) => {
    console.log('topic request')
    return Object.assign({}, state, {
      loading: true
    })
  },
  'fetch topic list failure': (state, { payload }) => {
    console.log(payload)
    return {
      ...state,
      ...payload
    }
  },
  'fetch topic list success': (state, { payload }) => {
    return {
      ...state,
      ...payload,
      loading: false
    }
  }
}, {
  list: [],
  total: 0,
  loading: false
})
