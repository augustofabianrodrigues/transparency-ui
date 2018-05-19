import axios from 'axios'

export default {
  login (username, password) {
    return axios.post('/api/auth/login', { username, password })
  },
  register (user) {
    return axios.post('/api/auth/register', user)
  }
}
