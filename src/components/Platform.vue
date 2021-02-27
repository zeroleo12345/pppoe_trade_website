<template>
  <div :class="initSuccess === false ? 'hidden_all': 'show_all'">

    <div class="user_info">
      <img class="user_headimg" :src="picture_url"/>
      <p class="nickname">{{ nickname }}</p>
    </div>

    <div>
      <!-- https://github.com/Binaryify/vue-qr -->
      <p style='font-weight:bold'>平台二维码:</p>
      <vue-qr :style="{ display: qrcode_content === '' ? 'none': 'initial'}" :correctLevel="3" :logoSrc="picture_url" :text="qrcode_content" :size="200" colorDark="#313a90" :margin="0" :logoMargin="3"></vue-qr>
    </div>

  </div>
</template>

<script>
import VueQr from 'vue-qr'
import userAPI from '@/api/user'

export default {
  name: 'Account',
  data () { // 定义属性变量
    return {
      nickname: '',
      picture_url: '', // http://pic.ffpic.com/files/tupian/tupian636.jpg
      qrcode_content: '',
      username: 'null',
      password: 'null',
      status: 'unknown',
      statusDict: {
        expired: '已过期, 需充值',
        working: '正常使用中',
        inactive: '已停用, 请联系管理员'
      },
      expired_at: '2000年1月1日 00:00:00',
      initSuccess: false,

      tariff_name: '',
      month1: 'month1',
      month3: 'month3',
      month6: 'month6'
    }
  },
  async mounted () {
    // alert(this.$route.query.code)
    let code = this.$route.query.code
    if (process.env.NODE_ENV === 'development' && code === null) {
      // note 用于测试
      code = 'testcode'
    }

    // 异步获取用户资料
    let userResponse = await userAPI.getUser({code: code})
    console.log(userResponse.data)
    console.log(userResponse.headers)
    this.username = userResponse.data.data.account.username
    this.password = userResponse.data.data.account.password
    this.nickname = userResponse.data.data.user.nickname
    this.picture_url = userResponse.data.data.user.picture_url
    if (userResponse.data.data.platform != null) {
      this.qrcode_content = userResponse.data.data.platform.qrcode_content
    } else {
      this.qrcode_content = ''
    }

    // 先清空, 再保存全局jwt token, 用于后续请求
    this.$store.commit('SET_TOKEN', '')
    let token = userResponse.data.data.authorization
    this.$store.commit('SET_TOKEN', token)
    console.log(token)

    // 标记已经初始化
    this.initSuccess = true
  },
  methods: {
  },
  computed: {
    /* computed 和 methods 区别 : 缓存 */
  },
  components: {
    VueQr
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  /* TODO: 上-右-下-左: top right bottom left */
  /* TODO: .是class, #是id */
  .hidden_all {
    visibility: hidden;
  }
  .user_info {
    .user_headimg {
      width: 3rem;
      height: 3rem;
      margin: 0.3rem 0rem 0.3rem 0.1rem;
      float: left;
      border-radius: 50%;
    }
    .nickname {
      font-size: 1rem;
      margin-left: 0.3rem;
      display: inline-block;
    }
  }
</style>
