<template>

  <article class="page sans">

    <div class="page-body">
      <hr />
      <table>
        <tr>
          <td>&nbsp;</td>
          <td>Knocky</td>
          <td>Flor</td>
          <td>Ella</td>
          <td>Juan</td>
        </tr>
        <tr>
          <td>Breed</td>
          <td>Jack Russell</td>
          <td>Poodle</td>
          <td>Streetdog</td>
          <td>Cocker Spaniel</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>16</td>
          <td>9</td>
          <td>10</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Owner</td>
          <td>Mother-in-law</td>
          <td>Me</td>
          <td>Me</td>
          <td>Sister-in-law</td>
        </tr>
        <tr>
          <td>Eating Habits</td>
          <td>Eats everyone's leftovers</td>
          <td>Nibbles at food</td>
          <td>Hearty eater</td>
          <td>Will eat till he explodes</td>
        </tr>
      </table>
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

</style>
