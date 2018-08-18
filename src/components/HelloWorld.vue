<template>
  <div :class="initSuccess === false ? 'hidden_all': 'show_all'">
    <div class="user_info">
      <img class="user_headimg" :src="headimgurl"/>
      <p class="nickname">{{ nickname }}</p>
    </div>
    <div class="account_info">
      <p class="username">宽带账号： {{ username }}</p>
      <p class="status">账号状态： {{ status }}</p>
      <p class="expired_at">到期时间： {{ expired_at }}</p>
    </div>
    <div class="choose_box">
      <div @id="month1" @click="select_tariff(month1)" :class="tariff_name === month1 ? 'selected_box': 'unselected_box'">
        <p>1个月</p>
        <p style='font-weight:bold'>50元</p>
      </div>
      <div @id="month3" @click="select_tariff(month3)" :class="tariff_name === month3 ? 'selected_box': 'unselected_box'">
        <p>3个月</p>
        <p style='font-weight:bold'>144元(9.6折)</p>
      </div>
      <div @id="month6" @click="select_tariff(month6)" :class="tariff_name === month6 ? 'selected_box': 'unselected_box'">
        <p>6个月</p>
        <p style='font-weight:bold'>276元(9.2折)</p>
      </div>
    </div>
    <div class="pay_button">
      <button @click="start_pay" :class="tariff_name ? 'enabled_button': 'disabled_button'">充值</button>
    </div>
  </div>
</template>

<script>
import userAPI from '@/api/user'

export default {
  name: 'HelloWorld',
  data () { // 定义属性变量
    return {
      nickname: '',
      headimgurl: 'http://pic.ffpic.com/files/tupian/tupian636.jpg',
      username: 'test',
      status: '未知',
      statusDict: {
        expired: '已过期',
        working: '使用中',
        inactive: '已停用'
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
    if (process.env.NODE_ENV === 'development') {
      code = 'testcode'
    }

    // 异步获取用户资料
    let userResponse = await userAPI.getUser({code: code})
    console.log(userResponse.data)
    console.log(userResponse.headers)
    this.username = userResponse.data.data.username
    this.nickname = userResponse.data.data.weixin.nickname
    this.headimgurl = userResponse.data.data.weixin.headimgurl

    // 保存全局token, 用于后续请求
    let token = userResponse.headers['authorization']
    this.$store.commit('SET_TOKEN', token)
    console.log(token)

    // 异步获取用户免费资源
    let resourceResponse = await userAPI.getUserResource()
    this.expired_at = this.$moment(resourceResponse.data.data.expired_at).format('YYYY年MM月DD日 HH:mm:ss')
    this.status = this.statusDict[resourceResponse.data.data.status]
    this.initSuccess = true;
  },
  methods: { // 定义函数方法
    select_tariff (name) {
      this.tariff_name = name
    },
    async start_pay () {
      // 点击支付
      // console.log(process.env)
      if (!this.tariff_name) {
        console.log(this.tariff_name)
        return
      }
      let response = await userAPI.postCreateOrder({code: 'testcode', tariff_name: this.tariff_name})
      console.log(response)
      if (response.data.data) {
        let redirectUrl = response.data.data.redirect_url
        console.log(redirectUrl)
        window.location.href = redirectUrl
        // this.$router.go(redirectUrl)
      }
    }
  },
  computed: {
    /* computed 和 methods 区别 : 缓存 */
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

  .account_info {
    clear: both;
    .username {
      margin: 1rem 0rem 0rem 0.5rem;
    }
    .status {
      margin: 1rem 8rem 0rem 0.5rem;
    }
    .expired_at {
      display: inline-block;
      margin: 1rem 0rem 0rem 0.5rem;
    }
  }

  .choose_box {
    width: 100%;
    text-align: center;
    font-size: 60%;
    margin: 2rem 0 0 0;
    display: flex;
    font-size: 1.0rem;
    .selected_box {
      width: 30%;
      margin: 0.5rem;
      color: #fdb77e;
      border: 2px solid #fdb77e;
      -webkit-tap-highlight-color:transparent;
    }
    .unselected_box {
      width: 30%;
      margin: 0.5rem;
      color: #abaec2;
      border: 2px solid #cfd9e8;
      -webkit-tap-highlight-color:transparent;
    }
  }

  .pay_button{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    /*box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.2);*/
    .disabled_button {
      display: block;
      width: 94%;
      outline: none;
      border: none;
      padding: 0.5rem;
      font-size: 1.6rem;
      opacity: 0.8;
      margin:0.6rem auto;
      background-color: #cfd9e8;
      border-radius: 0.2rem;
      -webkit-tap-highlight-color:transparent;
    }
    .enabled_button {
      display: block;
      width: 94%;
      outline: none;
      border: none;
      padding: 0.5rem;
      font-size: 1.6rem;
      opacity: 0.8;
      margin:0.6rem auto;
      background-color: #fdb77e;
      border-radius: 0.2rem;
    }
  }
</style>
