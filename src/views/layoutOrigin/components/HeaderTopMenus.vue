<template>
    <el-menu mode="horizontal"
             background-color="#2c2a48"
             text-color="#F2F2F2"
             active-text-color="#fff"
             @select="handleSelect"
             :default-active="activeIndex"
             class="header-top-menus"
             router
    >
    <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'
import SidebarItem from './Sidebar/SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  data() {
    return {
      activeIndex: '/settle',
    };
  },
  watch: {
    '$route'(to) {
      if (to.matched.length > 0) {
        this.activeIndex = to.matched[0].path;
      }
      this.handleSelect(this.activeIndex);
    }
  },
  methods:{
    handleSelect(index) {
      this.activeIndex = index;
    },
  }
}
</script>

<style scoped>

.header-top-menus{
  display: inline-block;
  border: 0;
  position: absolute;
}

.header-top-menus.el-menu--horizontal > li {
  height: 40px;
  line-height: 40px;
}

.header-top-menus.el-menu--horizontal > li.el-submenu > * {
  height: 39px;
  line-height: 40px;
}

.header-top-menus.el-menu--horizontal > li.is-active {
  background: #595591 !important;
}

.el-menu.el-menu--horizontal {
  border-bottom: none !important;
}

.el-menu >>> .el-menu-item {
  box-sizing: border-box;
  height: 40px;
  font-weight: bold;
}
</style>
