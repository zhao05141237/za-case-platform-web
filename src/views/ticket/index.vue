<template>
  <div class="ticket-container">
    <h1 style="text-align:center;padding-top:20%;">正在登录,请稍后</h1>
    <!--div>ticket={{ticket}}</div>
    <div>redirect={{redirect}}</div-->
  </div>
</template>
<script>
import { getCookie, getInfo } from '@/api/user'
import Cookies from 'js-cookie'

export default {
  name: 'Ticket',
  components: {},
  data() {
    return {
      ticket: '',
      redirect: ''
    }
  },
  created() {
    this.redirect = this.$route.query && this.$route.query.redirect
    const url = window.location.href
    // "http://localhost:8080/index.html?ticket=ST-56614658-D6NtLkEca70kNeu2AqjIHuUvUlG4ybDTsg2#/ticket?redirect=http%3A%2F%2Flocalhost%3A8080%2Findex.html%23%2Fdashboard"
    const ticket = url.match(/\?(.+)#/)
    if (ticket && ticket[1]) {
      this.ticket = ticket[1].replace('ticket=', '')
      const param = {
        ticket: this.ticket
      }
      window.localStorage.setItem('ticket', param.ticket)
     	getCookie({ ticket: this.ticket }).then(response => {
        window.localStorage.setItem('token', response.data)
        // window.localStorage.setItem('token', '2FQ3k7PsJzOpl8OaJ+UIX1X6NZDqOM9w46de4Rodr8k8rtR6SGabo4LH9HiBYg+0m/e9BT7bdwWHQWNOZMKzxTBT4mGYIFwVEIYaRhu58suuXqwS+SJ5sUac9MsURG4D');
        getInfo().then(res => {
          window.localStorage.setItem('userInfo', JSON.stringify(res.data))
          window.location.href = this.redirect
        })
      })
    } else {
      alert('无法检测ticket')
    }
  },
  destroyed() {},
  methods: {}
}

</script>
<style rel="stylesheet/scss" lang="scss">
</style>
