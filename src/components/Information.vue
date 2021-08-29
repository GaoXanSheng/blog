<script lang="ts">
export default {
  name: 'information',
  props: {
    msg: String
  },
  data(){
    return {
      computerFile:"computerFile"
    }
  }
}
</script>
<template>
  <div class="mdui-container doc-container">
    <div class="mdui-typo">
      <hr/>
    </div>
    <div class="mdui-typo">
      <h1><a href="https://www.mdui.org/design/"><strong>M</strong>aterial <strong>D</strong>esign</a></h1>
      <blockquote>
        <p>Thaumaturgy... which giveth certain order to make strange works, of the sense to be perceived and of men greatly to be wondered at.MathematicallPraeface.</p>
        <footer>John Dee(1570) ——《Euclid's Elements》</footer>
      </blockquote>
      <div class="mdui-typo" v-for="i in 1" :key="i">

        <h1>{{this.$data.computerFile}}</h1>
        <p>每一个function的作用下，cpu都会吃到负载，耗电量的提升，带来全球变暖的显著变化，你们的每个子子孙孙的后代会毁在你们的每一个function中，现在开始禁用javascript，绿色环保，为未来的地球做出贡献。</p>

      </div>
      <div class="bottom"></div>
    </div>
  </div>
</template>


<style>
.bottom {
margin-bottom: 400px;
}
</style>
