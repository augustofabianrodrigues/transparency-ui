export default {
  clear () {
    localStorage.removeItem('authInfo')
  },
  get () {
    try {
      const json = localStorage.getItem('authInfo')
      return json ? JSON.parse(json) : {}
    } catch (error) {
      return {}
    }
  },
  set (obj) {
    localStorage.setItem('authInfo', obj)
  }
}
