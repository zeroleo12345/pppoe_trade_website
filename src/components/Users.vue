<template>
  <div>
    <vue-good-table :columns="columns" :rows="rows" :search-options="{ enabled: true }">
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field === 'picture_url'">
          <img :src="props.row.picture_url" loading="lazy"/>
        </span>
        <span v-else>
          {{props.formattedRow[props.column.field]}}
        </span>
      </template>
    </vue-good-table>
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
        {
          label: '密码',
          field: 'password',
        },
        {
          label: '失效时间',
          field: 'expired_at',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd\'T\'HH:mm:ss\'+08:00\'',
          dateOutputFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        {
          label: '角色',
          field: 'role',
        },
        {
          label: 'user_id',
          field: 'user_id',
        },
        {
          label: 'openid',
          field: 'openid',
        },
        {
          label: '创建时间',
          field: 'created_at',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd\'T\'HH:mm:ss\'+08:00\'',
          dateOutputFormat: 'yyyy-MM-dd HH:mm:ss',
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
