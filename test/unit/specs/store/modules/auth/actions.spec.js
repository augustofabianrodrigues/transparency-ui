import { LOGGEDIN, LOGGEDOFF } from '@/store/modules/auth/mutation-types'

/* eslint-disable import/no-webpack-loader-syntax */
const actionsInjector = require('inject-loader!@/store/modules/auth/actions')

const actions = actionsInjector({
  '@/api/auth': {
    register (user) {
      return new Promise((resolve, reject) => {
        resolve({
          data: {
            user: {
              firstName: 'foo',
              lastName: 'bar',
              email: 'foo@bar.com',
              username: 'foobar'
            },
            accessToken: 'token',
            expiresIn: 3600
          }
        })
      })
    },
    login (username, password) {
      return new Promise((resolve, reject) => {
        resolve({
          data: {
            user: {
              firstName: 'foo',
              lastName: 'bar',
              email: 'foo@bar.com',
              username: 'foobar'
            },
            accessToken: 'token',
            expiresIn: 3600
          }
        })
      })
    }
  }
})

describe(`/store/modules/auth/actions`, () => {
  const now = new Date()
  let clock, sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    clock = sinon.useFakeTimers(now.getTime())
  })

  afterEach(() => {
    sandbox.restore()
    clock.restore()
  })

  it(`login`, async () => {
    const commit = sinon.spy()
    const state = {}

    await actions.login({ commit, state }, { username: 'foobar', password: 'strong-password' })

    const date = new Date()
    expect(commit.args).to.deep.equal([
      [LOGGEDIN, {
        user: {
          firstName: 'foo',
          lastName: 'bar',
          email: 'foo@bar.com',
          username: 'foobar'
        },
        accessToken: 'token',
        expireDate: date.setSeconds(date.getSeconds() + 3600)
      }]
    ])
  })

  it(`logoff`, () => {
    const commit = sinon.spy()
    const state = {}

    actions.logoff({ commit, state })
    expect(commit.args).to.deep.equal([
      [LOGGEDOFF]
    ])
  })

  it(`register`, async () => {
    const commit = sinon.spy()
    const state = {}

    await actions.register({ commit, state }, {
      firstName: 'foo',
      lastName: 'bar',
      email: 'foo@bar.com',
      username: 'foobar',
      password: '123'
    })

    const date = new Date()
    expect(commit.args).to.deep.equal([
      [LOGGEDIN, {
        user: {
          firstName: 'foo',
          lastName: 'bar',
          email: 'foo@bar.com',
          username: 'foobar'
        },
        accessToken: 'token',
        expireDate: date.setSeconds(date.getSeconds() + 3600)
      }]
    ])
  })
})
