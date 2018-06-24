const user = {
  state: {
    user: '',
    email: '',
    name: '',
    userInfo: {}
  },
  getters: {
    userInfo: state => {
      return state.userInfo
    }
  },
  mutations: {
    /**
     * 设置用户信息
     * @param  Object state   vuex的state对象
     * @param  Object payload 参数对象，其结构如下：
     *                        {
     *                          openid: "supervisor@babameeting.com",
     *                          name: null,
     *                          role:"vip",
     *                          headerimgurl: 'https://link.babameeting.com/avatar.jpg',
     *                          is_enable: true,
     *                          created: '2018-03-24T19:51:50.194838+08:00',
     *                          last_login: "2018-02-09T07:21:00.614918Z",
     *                        }
     */
    SET_USER_INFO: (state, payload) => {
      state.userInfo = Object.assign({}, payload.userInfo)
    }
  },
  actions: {
  }
}

export default user
