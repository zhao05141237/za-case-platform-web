<template>
  <el-col>
    <el-row id="header-top" type="flex" justify="space-between" align="middle">
      <el-col :span="12">
        <img class="logo" src="@/assets/iconfont/logo-light-s.svg" alt="logo">
        <header-top-menus/>
      </el-col>
    </el-row>
    <el-row>
      <app-main />
    </el-row>
  </el-col>
</template>

<script>
import { Navbar, HeaderTopMenus, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    HeaderTopMenus,
    Navbar,
    AppMain
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: false,
        openSidebar: true,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      // this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
  #header-top {
    width: 100%;
    padding: 0 10px;
    background-color: #2c2a48;
    color: rgb(245, 245, 245);
    font-size: 14px;
    height: 40px;
  }

  .logo {
    width: 156px;
    margin-bottom: 0;
    border: 0;
    margin-right: 20px;
    display: inline-block;
    line-height: 37px;
    background-size: 156px 30px;
    box-sizing: border-box;
    height: 37px;
    background-repeat: no-repeat;
    background-position: 50% center;
  }
</style>
