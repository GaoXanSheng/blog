<script lang="ts">
import instance from '../api/index'
export default {
  name: 'bottom',
  props: {
    msg: String
  },
  data (){
    return {
      data:"备案号码",
    }
  },
  mounted() {
    this.$nextTick(function () {
      instance.instance.get('/settings').then(res=>{
        this.data=res.data
      })
    })
  }
}



// 仅在渲染整个视图之后运行的代码

</script>
<template>
  <div class="icp mdui-bottom-nav mdui-bottom-nav-text-auto">
    <a class="mdui-ripple" href="https://beian.miit.gov.cn/">{{ this.$data.data.puTonFile }}</a>
    <!--    备案号码-->
    <a class="mdui-ripple" v-bind:href="this.$data.data.github">GitHub</a>
    <a class="mdui-ripple" href="https://www.mdui.org/">MDUI</a>
  </div>
</template>


<style>

</style>
