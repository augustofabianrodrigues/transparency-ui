import { LOGGEDIN, LOGGEDOFF } from './mutation-types'

export default {
  [LOGGEDIN] (state, payload) {
    state.expireDate = payload.expireDate
    state.accessToken = payload.accessToken
    state.user = payload.user
  },
  [LOGGEDOFF] (state) {
    state.expireDate = null
    state.accessToken = null
    state.user = null
  }
}
