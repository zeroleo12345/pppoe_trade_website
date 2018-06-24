import Cookie from 'js-cookie'
import CONSTANTS from '@/constants'

const app = {
  state: {
    searchText: '',
    token: Cookie.get(CONSTANTS.GLOBAL.TOKEN_NAME) || ''
  },
  getters: {
    token: (state) => {
      return state.token || Cookie.get(CONSTANTS.GLOBAL.TOKEN_NAME)
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      if (!token) {
        return Cookie.remove(CONSTANTS.GLOBAL.TOKEN_NAME)
      }
      return Cookie.set(CONSTANTS.GLOBAL.TOKEN_NAME, token)
    }
  }
}

export default app
