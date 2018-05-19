export default {
  isValid (state) {
    const { accessToken, expireDate, user } = state
    return Boolean(accessToken && expireDate && user && !this.isExpired(state))
  },
  isExpired (state) {
    const { expireDate } = state
    return Boolean(expireDate && expireDate <= Date.now())
  }
}
