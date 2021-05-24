<template>
  <top></top>
  <bodyer></bodyer>
  <bottom></bottom>
  <div class="icp mdui-bottom-nav mdui-bottom-nav-text-auto">
    <a class="mdui-ripple" href="https://beian.miit.gov.cn/">冀ICP备2021010559号</a>
    <a class="mdui-ripple" href="https://gitee.com/ToSimplZ/blog">GitHub</a>
    <a class="mdui-ripple" href="https://www.mdui.org/">MDUI</a>
  </div>
</template>

<script>
import bottom from './components/boteem.vue'
import top from './components/top.vue'
import bodyer from './components/bodyer.vue'
export default {
  name: 'App',
  components: {
    top,
    bottom,
    bodyer
  }
}
</script>

<style lang="scss">
.icp{
  text-align: center;
}
*{
  margin: 0;
  padding: 0;
}
a:link    {color: rgba(0, 0, 0, 1);}
a:visited {color: rgba(0, 0, 0, 1);}
a:hover   {color: rgba(0, 0, 0, 1);}
a:active  {color: rgba(0, 0, 0, 1);}

body{

  background-repeat: no-repeat;
  //background-image: url("./assets/body.png");
}
</style>
