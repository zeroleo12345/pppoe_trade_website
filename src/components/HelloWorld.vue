<template>
  <div class="hello">
    <div class="user_info">
      <img class="user_headimg" :src="headimgurl"/>
      <p class="nickname">{{ nickname }}</p>
    </div>
    <div class="account_info">
      <p class="account">账号: {{ account }}</p>
      <p class="status">状态: {{ status }}</p>
      <p class="expired_at">到期时间: {{ expired_at }}</p>
    </div>
    <div class="choose_box">
      <div @id="month1" @click="change_box(month1)" :class="box_id === month1 ? 'selected_box': 'unselected_box'">
        <p>1个月</p>
        <p style='font-weight:bold'>50元</p>
      </div>
      <div @id="month2" @click="change_box(month2)" :class="box_id === month2 ? 'selected_box': 'unselected_box'">
        <p>3个月</p>
        <p style='font-weight:bold'>144元(9.6折)</p>
      </div>
      <div @id="month6" @click="change_box(month6)" :class="box_id === month6 ? 'selected_box': 'unselected_box'">
        <p>6个月</p>
        <p style='font-weight:bold'>276元(9.2折)</p>
      </div>
    </div>
    <div class="charge_bottom">
      <button class="charge_btn">充值</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      nickname: '昵称',
      headimgurl: 'http://pic.ffpic.com/files/tupian/tupian636.jpg',
      account: '100000',
      status: '正常',
      expired_at: '2018年1月1日',
      box_id: '',
      month1: 'month1',
      month2: 'month2',
      month6: 'month6'
    }
  },
  methods: {
    change_box (id) {
      // alert(event.target.id)
      this.box_id = id
    }
  },
  computed: {
    /* computed 和 methods 区别 : 缓存 */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  /* 上-右-下-左: top right bottom left */
  /* .是class, #是id */
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
    .account {
      float: left;
      margin: 1rem 0rem 0rem 0.5rem;
    }
    .status {
      float: right;
      margin: 1rem 8rem 0rem 0rem;
    }
    .expired_at {
      display: inline-block;
      margin: 1rem 0rem 0rem 0.5rem;
    }
  }

  .choose_box {
    width: 100%;
    padding: 0.5rem 0;
    box-sizing: border-box;
    text-align: center;
    border-radius: 0.5rem;
    font-size: 60%;
    margin-top: 2rem;
    float: left;
    display: flex;
    background-color: #FFFFFF;
    .selected_box {
      width: 30%;
      margin: 0.5rem;
      border: 2px solid #FBDD3B;
    }
    .unselected_box {
      width: 30%;
      margin: 0.5rem;
      border: 2px solid #E8E8E8;
    }
  }

  .charge_bottom{
    width: 100%;
    position: fixed;
    background-color: #FFFFFF;
    bottom: 0;
    left: 0;
    box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.2);
    .charge_btn {
      display: block;
      width: 94%;
      outline: none;
      border: none;
      padding: 0.5rem;
      font-size: 0.6rem;
      font-weight: bold;
      opacity: 0.8;
      margin:0.6rem auto;
      background-color: #FBDB05;
      border-radius: 0.2rem;
    }
  }
</style>
