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
      <div class="mdui-typo" v-for="i in this.$store.state.textId" :key="i">
        <h1>{{ this.$store.state.data[i-1].h1 }}</h1>
        <p>{{ this.$store.state.data[i-1].data }}</p>
      </div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottom',
  props: {
    msg: String
  }
}
</script>
<style lang="scss">
.bottom {
margin-bottom: 400px;
}
</style>
