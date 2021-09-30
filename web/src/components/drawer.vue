<script lang="ts">
import Release from "./Setup component/release.vue";
import Settings from "./Setup component/settings.vue";
import About from "./Setup component/about.vue";
import Administration from "./Setup component/Administration.vue";
export default {
  name: "drawer",
  components: {
    Release,
    Administration,
    Settings,
    About
  },
  data() {
    return {
      SidebarStatus: true,
      className: {
        1: '',
        2: '',
        3: '',
        4: ''
      }
    }
  },
  methods: {
    open() {
      let inst = new mdui.Drawer('#drawer');
      if (this.SidebarStatus) {
        inst.open();
        this.SidebarStatus = false
      } else {
        inst.close();
        this.SidebarStatus = true
      }
    },
    action(id: number) {
      for (let i in this.className) {
        this.className[i] = ''
      }
      this.className[id] = "mdui-list-item-active"
    }
  },
  mounted() {
    this.$nextTick(function () {
      let inst = new mdui.Drawer('#drawer');
      inst.close();
    })
  }
}
</script>
<template>
  <header class="mdui-appbar mdui-appbar-fixed mdui-color-pink-200">
    <div class="mdui-toolbar mdui-color-theme">
      <a href="javascript:;" class="mdui-btn mdui-btn-icon" @click="open()"><i class="mdui-icon material-icons">menu</i></a>
      <a href="javascript:;" class="mdui-typo-headline">控制台</a>
      <div class="mdui-toolbar-spacer"></div>
    </div>
  </header>
  <div id="drawer" class="mdui-drawer spacing mdui-color-grey-300">
    <ul class="mdui-list">
      <li class="mdui-subheader-inset">文章</li>
      <li class="mdui-list-item mdui-ripple" @click="action(1)" v-bind:class="className['1']">
        <i class="mdui-list-item-avatar mdui-icon material-icons">folder</i>
        <div class="mdui-list-item-content">
          <div class="mdui-list-item-title">发布</div>
        </div>
        <i class="mdui-icon material-icons">queue</i>
      </li>
      <li class="mdui-list-item mdui-ripple" @click="action(2)" v-bind:class="className['2']">
        <i class="mdui-list-item-avatar mdui-icon material-icons">folder</i>
        <div class="mdui-list-item-content">
          <div class="mdui-list-item-title">管理</div>
        </div>
        <i class="mdui-icon material-icons">storage</i>
      </li>
      <li class="mdui-subheader-inset">更多</li>
      <li class="mdui-list-item mdui-ripple" @click="action(3)" v-bind:class="className['3']">
        <i class="mdui-list-item-avatar mdui-icon material-icons mdui-color-blue mdui-text-color-white">assignment</i>
        <div class="mdui-list-item-content">
          <div class="mdui-list-item-title">设置</div>
        </div>
        <i class="mdui-icon material-icons">settings</i>
      </li>
      <li class="mdui-list-item mdui-ripple" @click="action(4)" v-bind:class="className['4']">
        <i class="mdui-list-item-avatar mdui-icon material-icons mdui-color-yellow-600 mdui-text-color-white">assessment</i>
        <div class="mdui-list-item-content">
          <div class="mdui-list-item-title">关于</div>
        </div>
        <i class="mdui-icon material-icons">add_circle_outline</i>
      </li>
    </ul>
  </div>
  <div class="mdui-container" style="margin-top: 80px">
    <div class="container mdui-col-xs-9">
      <div v-if="className['1']">
        <Release></Release>
      </div>
      <div v-if="className['2']">
        <Administration></Administration>
      </div>
      <div v-if="className['3']">
        <Settings></Settings>
      </div>
      <div v-if="className['4']">
        <About></About>
      </div>
      <div v-if="className['1']===''&&className['2']===''&&className['3']===''&&className['4']===''">
        <About></About>
      </div>
    </div>
  </div>
</template>


<style scoped>
.spacing {
  margin-top: 64px;
  z-index: -1;
}

.container {
  position: absolute;
}
</style>