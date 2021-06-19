<template>
  <div>
    <vue-good-table :columns="columns" :rows="rows" :search-options="{ enabled: true }"></vue-good-table>
  </div>
</template>

<script>
import Api from '@/api/user2'
//

export default {
  name: 'Users',
  data () {
    return {
      columns: [
        // <th>平台ID</th>
        // <th>微信昵称</th>
        // <th>微信头像</th>
        // <th>账号</th>
        // <th>密码</th>
        // <th>失效时间</th>
        // <!-- xxx -->
        // <th>角色</th>
        // <th>user_id</th>
        // <th>openid</th>
        // <th>创建时间</th>
        {
          label: '平台ID',
          field: 'platform_id',
        },
        {
          label: '微信昵称',
          field: 'nickname',
        },
        {
          label: '微信头像',
          field: 'picture_url',
        },
        {
          label: '账号',
          field: 'username',
        },
      ],
      rows: [],
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
