<template>
  <top></top>
  <Subject></Subject>
  <bottom></bottom>
  <div class="icp mdui-bottom-nav mdui-bottom-nav-text-auto">
    <a class="mdui-ripple" href="https://beian.miit.gov.cn/">{{ this.$store.state.puTonFile }}</a>
<!--    备案号码-->
    <a class="mdui-ripple" :href="this.$store.state.github">GitHub</a>
    <a class="mdui-ripple" href="https://www.mdui.org/">MDUI</a>
  </div>
</template>

<script>
import bottom from './components/boteem.vue'
import top from './components/top.vue'
import Subject from './components/Subject.vue'
export default {
  name: 'App',
  components: {
    top,
    bottom,
    Subject
  },
  data: function () {
    return {
    }
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
