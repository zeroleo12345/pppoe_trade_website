<template>

  <article class="page sans">

    <!-- iOS -->
    <div :style="{ display: !is_ios ? 'none': 'initial'}" class="page-body">
      <hr />
      <div class="column-list">
        <div style="width:50%" class="column">
          <div>第一步:</div>
          <p>苹果手机打开Wi-Fi界面，</p>
          <p>点击: <mark class="highlight-red"><strong>{{ssid}}</strong></mark></p>
        </div>
        <div style="width:50%" class="column">
          <figure class="image"><a href="http://zlxpic.lynatgz.cn/ios_1.png"><img style="width:1023px" src="http://zlxpic.lynatgz.cn/ios_1.png"/></a></figure>
          <p class="">
          </p>
        </div>
      </div>
      <hr />
      <div class="column-list">
        <div style="width:50.000000000000014%" class="column">
          <div>第二步:</div>
          <p>按照图文介绍, 填写认证信息</p>
          <p>1) 用户名, 填: <mark class="highlight-red"><strong>{{username}}</strong></mark></p>
          <button class="copyBtn" data-clipboard-action="copy">点此复制账号密码</button>
          <p>2) 密码, 填: <mark class="highlight-red"><strong>{{password}}</strong></mark></p>
          <p>3) 点击: <mark class="highlight-red"><strong>加入</strong></mark></p>
        </div>
        <div  style="width:50%" class="column">
          <figure class="image"><a href="http://zlxpic.lynatgz.cn/ios_2.png"><img style="width:1038px" src="http://zlxpic.lynatgz.cn/ios_2.png"/></a></figure>
          <p class="">
          </p>
        </div>
      </div>
      <hr />
      <div class="column-list">
        <div style="width:50%" class="column">
          <div>第三步:</div>
          <div>点击: <mark class="highlight-red"><strong>信任</strong></mark></div>
          <div>完成！开始上网</div>
        </div>
        <div  style="width:50%" class="column">
          <figure class="image">
            <a href="http://zlxpic.lynatgz.cn/ios_3.png">
              <img style="width:1031px" src="http://zlxpic.lynatgz.cn/ios_3.png"/></a>
          </figure>
        </div>
      </div>
    </div>

    <!-- Android -->
    <div :style="{ display: !is_android ? 'none': 'initial'}" class="page-body">
      <hr />
      <div class="column-list">
        <div  style="width:50%" class="column">
          <div>第一步:</div>
          <p>安卓手机打开WLAN界面，</p>
          <p>点击: <mark class="highlight-red"><strong>{{ssid}}</strong></mark></p>
        </div>
        <div  style="width:50%" class="column">
          <figure class="image"><a href="http://zlxpic.lynatgz.cn/android_1.png"><img style="width:1024px" src="http://zlxpic.lynatgz.cn/android_1.png"/></a></figure>
          <p class=""></p>
        </div>
      </div>
      <hr />
      <div class="column-list">
        <div  style="width:50%" class="column">
          <div>第二步:</div>
          <p>按照图文介绍, 填写认证信息</p>
          <p>0) EAP方法, 选择: <mark class="highlight-red"><strong>PEAP</strong></mark></p>
          <p>1) 阶段2身份验证, 选择: <mark class="highlight-red"><strong>MSCHAPV2</strong></mark></p>
          <p>2) CA证书, 选择: <mark class="highlight-red"><strong>(未指定)</strong></mark> 或 <mark class="highlight-red"><strong>不验证</strong></mark></p>
          <p>3) 身份, 填: <mark class="highlight-red"><strong>{{username}}</strong></mark></p>
          <button class="copyBtn" data-clipboard-action="copy">点此复制账号密码</button>
          <p>4) 匿名身份, 填: <mark class="highlight-red"><strong>{{username}}</strong></mark></p>
          <p>5) 填密码: <mark class="highlight-red"><strong>{{password}}</strong></mark></p>
          <p>6) 点击: <mark class="highlight-red"><strong>连接</strong></mark></p>
          <p>完成！开始上网</p>
        </div>
        <div  style="width:50%" class="column">
          <figure class="image"><a href="http://zlxpic.lynatgz.cn/android_2.png"><img style="width:1024px" src="http://zlxpic.lynatgz.cn/android_2.png"/></a></figure>
        </div>
      </div>
    </div>

  </article>

</template>

<script>
import Api from '@/api/user2'
import ClipboardJS from 'clipboard'

export default {
  name: 'GuideIOS',
  data () { // 定义属性变量
    return {
      is_ios: false,
      is_android: false,
      username: 'null',
      password: 'null',
      ssid: 'WIFI-n',
    }
  },
  async mounted () {
    // $route variable source: injex.js
    if (this.$route.name === 'android') {
      this.is_android = true
    }
    if (this.$route.name === 'ios') {
      this.is_ios = true
    }

    // alert(this.$route.query.code)
    let code = this.$route.query.code

    const api = new Api(this)
    // 异步获取用户资料
    let userResponse = await api.getUser({code: code})
    this.username = userResponse.data.account.username
    this.password = userResponse.data.account.radius_password
    this.ssid = userResponse.data.platform.ssid

    let password = this.password
    let clipboard = new ClipboardJS('.copyBtn', {
      text: function (trigger) {
        return password
      }
    })
    clipboard.on('success', e => {
      console.info('Action:', e.action)
      console.info('Text:', e.text)
      console.info('Trigger:', e.trigger)
      // 清除全选复制内容
      e.clearSelection()
      this.$alert('账号密码已复制到粘贴板', '复制成功')
      // this.$toasted.show('已复制', {
      //   theme: 'outline',
      //   position: 'top-center',
      //   duration: 800,
      // })
    })
    clipboard.on('error', function (e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
      alert('复制失败')
    })
  },
  methods: { // 定义函数方法
  },
  computed: {
    /* computed 和 methods 区别 : 缓存 */
  },
  components: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* webkit printing magic: print all background colors */
  html {
    -webkit-print-color-adjust: exact;
  }
  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }
  @media only screen {
    body {
      margin: 2em auto;
      max-width: 900px;
      color: rgb(55, 53, 47);
    }
  }

  body {
    line-height: 1.5;
    white-space: pre-wrap;
  }

  a,
  a.visited {
    color: inherit;
    text-decoration: underline;
  }

  figure {
    margin: 1.25em 0;
    page-break-inside: avoid;
  }

  figcaption {
    opacity: 0.5;
    font-size: 85%;
    margin-top: 0.5em;
  }

  mark {
    background-color: transparent;
  }

  hr {
    background: transparent;
    display: block;
    width: 100%;
    height: 1px;
    visibility: visible;
    border: none;
    border-bottom: 1px solid rgba(55, 53, 47, 0.09);
  }

  img {
    max-width: 100%;
  }

  @media only print {
    img {
      max-height: 100vh;
      object-fit: contain;
    }
  }

  @page {
    margin: 1in;
  }

  .column-list {
    display: flex;
    justify-content: space-between;
  }

  .column {
    padding: 0 1em;
  }

  .column:first-child {
    padding-left: 0;
  }

  .column:last-child {
    padding-right: 0;
  }

  table,
  th,
  td {
    border: 1px solid rgba(55, 53, 47, 0.09);
    border-collapse: collapse;
  }

  table {
    border-left: none;
    border-right: none;
  }

  th,
  td {
    font-weight: normal;
    padding: 0.25em 0.5em;
    line-height: 1.5;
    min-height: 1.5em;
    text-align: left;
  }

  th {
    color: rgba(55, 53, 47, 0.6);
  }

  time {
    opacity: 0.5;
  }

  td > time {
    white-space: nowrap;
  }

  input[type="checkbox"] {
    transform: scale(1.5);
    margin-right: 0.6em;
    vertical-align: middle;
  }

  p {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  .image {
    border: none;
    margin: 1.5em 0;
    padding: 0;
    border-radius: 0;
    text-align: center;
  }

  blockquote {
    font-size: 1.25em;
    margin: 1em 0;
    padding-left: 1em;
    border-left: 3px solid rgb(55, 53, 47);
  }

  .sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }

  .highlight-default {
  }
  .highlight-red {
    color: rgb(224,62,62);
  }
  .highlight-red_background {
    background: rgb(251,228,228);
  }

</style>
