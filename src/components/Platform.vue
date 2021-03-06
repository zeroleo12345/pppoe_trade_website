<template>
  <div :class="show_all === true ? 'show_all': 'hidden_all'">

    <div class="user_info">
      <img class="user_headimg" :src="picture_url"/>
      <p class="nickname">{{ nickname }}</p>
    </div>

    <div>
      <!-- https://github.com/Binaryify/vue-qr -->
      <p style='font-weight:bold'>无线网络: <strong>{{ssid}}</strong></p>
      <p style='font-weight:bold'>平台二维码:</p>
      <vue-qr :style="{ display: qrcode_content === '' ? 'none': 'initial'}" :correctLevel="3" :logoSrc="picture_url" :text="qrcode_content" :size="200" colorDark="#313a90" :margin="0" :logoMargin="3"></vue-qr>
    </div>

  </div>
</template>

<script>
import VueQr from 'vue-qr'
import Api from '@/api/user2'

export default {
  name: 'Account',
  data () { // 定义属性变量
    return {
      nickname: '',
      picture_url: '', // http://pic.ffpic.com/files/tupian/tupian636.jpg
      ssid: '',
      qrcode_content: '',
      show_all: false,
    }
  },
  async mounted () {
    // alert(this.$route.query.code)
    let code = this.$route.query.code

    const api = new Api(this)
    // 异步获取用户资料
    let userResponse = await api.getUser({code: code})
    this.nickname = userResponse.data.user.nickname
    this.picture_url = userResponse.data.user.picture_url
    // 先清空, 再保存全局jwt token, 用于后续请求
    this.$store.commit('SET_TOKEN', '')
    let token = userResponse.data.authorization
    this.$store.commit('SET_TOKEN', token)
    // 判断是否房东
    if (userResponse.data.platform.owner_user_id === userResponse.data.user.user_id) {
      this.qrcode_content = userResponse.data.platform.qrcode_content
      this.ssid = userResponse.data.platform.ssid
      this.show_all = true
    } else {
      this.show_all = false
      this.$alert('该页面仅提供给房东', '权限错误')
    }
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
