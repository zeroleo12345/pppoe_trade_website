<template>
  <div class="hello">
    <div>
        <div id="user_info">
            <img class="user_headimg" :src="headimgurl"/>
            <p>{{ nickname }}</p>
        </div>
      <div id="account_info">
        <p id="account">账号: {{ account }}</p>
        <p id="expired_at">到期时间: {{ expired_at }}</p>
      </div>
    </div>
    <div id="choose_box">
      <div id="1month" class="choose_left_box">
        <p>1个月</p>
        <p style='font-weight:bold'>50元</p>
      </div>
      <div id="3month" class="choose_center_box">
        <p>3个月</p>
        <p style='font-weight:bold'>145元</p>
      </div>
      <div id="6month" class="choose_right_box">
        <p>6个月</p>
        <p style='font-weight:bold'>280元</p>
      </div>
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
      expired_at: '2018年1月1日'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user_headimg {
  width: 3rem;
  height: 3rem;
  margin: 0.3rem 0rem 0.3rem 0.5rem; /* top right bottom left */
  float: left;
  border-radius: 50%;
}
#user_info p {
  font-size: 1rem;
  margin-left: 0.3rem;
  display: inline-block;
}
#account {
  font-size: 1rem;
  text-align: left;
  margin: 0.5rem 0rem 0rem 0rem
}
#expired_at {
  font-size: 1rem;
  text-align: left;
  margin: 0.5rem 0rem 0rem 0rem
}
#choose_box {
  width: 100%;
  padding: 0.5rem 0;
  box-sizing: border-box;
  text-align: center;
  border-radius: 0.5rem;
  font-size: 60%;
  margin-top: 2rem;
  float: left;
  display: flex;
  background-color: #ffffff;
}
.choose_left_box, .choose_right_box, .choose_center_box {
  width: 25%;
  margin: 0.5rem;
  border: 1px solid #fec800;
}
</style>
