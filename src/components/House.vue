<template>
  <div :class="initSuccess === false ? 'hidden_all': 'show_all'">
    <div class="user_info">
      <img class="user_headimg" :src="headimgurl"/>
      <p class="nickname">{{ nickname }}</p>
    </div>
    <div class="pay_button">
      <button @click="start_pay" :class="tariff_name ? 'enabled_button': 'disabled_button'">充值</button>
    </div>
  </div>
</template>

<script>
import userAPI from '@/api/user'

export default {
  name: 'House',
  data () { // 定义属性变量
    return {
      nickname: ''
    }
  },
  async mounted () {
    // alert(this.$route.query.code)
    let code = this.$route.query.code
    if (process.env.NODE_ENV === 'development' && code === null) {
      // note 用于测试
      code = 'testcode'
    }
  },
  methods: { // 定义函数方法
    select_tariff (name) {
      this.tariff_name = name
    },
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
    .password {
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

</style>
