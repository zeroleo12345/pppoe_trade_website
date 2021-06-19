<template>

  <article class="page sans">

    <div class="page-body">
      <hr />
      <table>
        <!-- 表头 -->
        <!--SELECT user.user_id, user.openid, account.platform_id, user.nickname, user.picture_url, user.created_at, account.username, account.password, account.role, account.expired_at-->
        <tr>
          <th>user_id</th>
          <th>openid</th>
          <th>platform_id</th>
          <th>微信昵称</th>
          <th>微信头像</th>
          <th>创建时间</th>
          <th>用户</th>
          <th>密码</th>
          <th>角色</th>
          <th>失效时间</th>
        </tr>

        <!-- 表内容 -->
        <tr v-for="row in rows" v-bind:key="row.user+row.platform_id">
          <td>{{ row.user_id }}</td>
          <td>{{ row.openid }}</td>
          <td>{{ row.platform_id }}</td>
          <td>{{ row.nickname }}</td>
          <td>{{ row.picture_url }}</td>
          <td>{{ row.created_at }}</td>
          <td>{{ row.username }}</td>
          <td>{{ row.password }}</td>
          <td>{{ row.role }}</td>
          <td>{{ row.expired_at }}</td>
        </tr>
      </table>
    </div>

  </article>

</template>

<script>
import Api from '@/api/user2'

export default {
  name: 'Users',
  data () { // 定义属性变量
    return {
      rows: null,
    }
  },
  async mounted () {
    const api = new Api(this)
    //
    let usersResponse = await api.getUsers()
    this.rows = usersResponse.data
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
