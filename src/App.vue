<template>
  <top></top>
  <bodyer></bodyer>
  <bottom></bottom>
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
*{
  margin: 0;
  padding: 0;
}
a:link    {color: rgba(0, 0, 0, 1);}
a:visited {color: rgba(0, 0, 0, 1);}
a:hover   {color: rgba(0, 0, 0, 1);}
a:active  {color: rgba(0, 0, 0, 1);}

body{
  height: 3000px;
  background-repeat: no-repeat;
  //background-image: url("./assets/body.png");
}
</style>
