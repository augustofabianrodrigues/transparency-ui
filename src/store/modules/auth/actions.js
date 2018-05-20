import authStorage from '@/utils/auth-storage'
import api from '@/api/auth'
import { LOGGEDIN, LOGGEDOFF } from './mutation-types'

function mapAuthResponseData (response) {
  const { data: { accessToken, expiresIn, user } } = response
  const now = new Date()

  return {
    accessToken,
    user,
    expireDate: now.setSeconds(now.getSeconds() + expiresIn)
  }
}

export const login = ({ commit }, credentials) => {
  return new Promise((resolve, reject) => {
    api.login(credentials)
      .then(mapAuthResponseData)
      .then(payload => {
        commit(LOGGEDIN, payload)
        authStorage.set(payload)
        resolve()
      }, error => {
        reject(error)
      })
  })
}

export const logoff = ({ commit }) => {
  commit(LOGGEDOFF)
  authStorage.clear()
}

export const register = ({ commit }, user) => {
  return new Promise((resolve, reject) => {
    api.register(user)
      .then(mapAuthResponseData)
      .then(payload => {
        commit(LOGGEDIN, payload)
        authStorage.set(payload)
        resolve()
      }, error => {
        reject(error)
      })
  })
}

export default {
  login,
  logoff,
  register
}
