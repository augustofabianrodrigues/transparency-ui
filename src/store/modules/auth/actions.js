import authStorage from '@/utils/auth-storage'
import api from '@/api/auth'
import { LOGGEDOFF, REGISTERED } from './mutation-types'

export const logoff = ({ commit }) => {
  commit(LOGGEDOFF)
  authStorage.clear()
}

export const register = ({ commit }, user) => {
  return new Promise((resolve, reject) => {
    api.register(user)
      .then(response => {
        const { data: { accessToken, expiresIn, user } } = response
        const now = new Date()

        const payload = {
          accessToken,
          user,
          expireDate: now.setSeconds(now.getSeconds() + expiresIn)
        }

        commit(REGISTERED, payload)
        authStorage.set(payload)

        resolve()
      }, error => {
        reject(error)
      })
  })
}

export default {
  logoff,
  register
}
