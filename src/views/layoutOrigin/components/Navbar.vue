<template>
  <div class="navbar">
    <!-- <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/> -->
    <breadcrumb />
    <el-dropdown class="favorites-container" trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">收藏夹</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="caseCollect">用例收藏</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <el-link href="http://gitlab.zhonganonline.com/wangjinzhi/go-autotest-demo" target="_blank" :underline="false">自动化工程DEMO</el-link>
        &nbsp;&nbsp;&nbsp;
        <span class="username">{{ name }}</span>
        <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
        <i class="el-icon-caret-bottom"/> -->
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <el-dropdown-item>
          <span style="display:block;" @click="logout">LogOut</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
// import { logout } from '@/api/login'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  data() {
    return {
      name: ''
    }
  },
  mounted() {
    const userInfo = localStorage.getItem('userInfo')
    this.name = userInfo && JSON.parse(userInfo).name
  },
  methods: {
    //收藏夹功能
    handleCommand(command) {
      switch (command){
        case 'caseCollect':
          this.$router.push('/favorites/caseFavorite')
          break;
      }
    },
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      localStorage.clear()
      const url = window.location.href
      // let nsso_target =`${window.location.origin}${window.location.pathname}`;
      var nsso_target = url.replace(/\?ticket=.+#/, '#')
      nsso_target = window.encodeURIComponent(nsso_target)
      // window.localStorage.setItem('target',nsso_target);
      // http://nsso.zhonganonline.com/logout?service=za-tm-platform&target=http://one-test.zhongan.com/tm/index.html
      var x = `http://nsso.zhonganonline.com/logout?service=za-tm-platform&target=${nsso_target}`
      window.location.href = x
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .favorites-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 220px;
    margin-top: 5px;
    .el-dropdown-link {
      cursor: pointer;
      color: #409EFF;
    }
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      line-height: initial;
      .el-link{
        font-weight: 400;
        color: #409EFF;
      }
      .username {
        display: inline-block;
        line-height: 50px;
      }
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

