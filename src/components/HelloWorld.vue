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
        <p style='font-weight:bold'>144元(9.6折)</p>
      </div>
      <div id="6month" class="choose_right_box">
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
  width: 30%;
  margin: 0.5rem;
  border: 1px solid #fec800;
}
.charge_bottom{
  width: 100%;
  position: fixed;
  background-color: #ffffff;
  bottom: 0;
  left: 0;
  box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.2);
}
.charge_bottom .charge_btn{
  display: block;
  width: 94%;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 0.6rem;
  font-weight: bold;
  opacity: 0.8;
  margin:0.6rem auto;
  background-color: #fbdb05;
  border-radius: 0.2rem;
}
</style>
