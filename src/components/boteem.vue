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
      <div v-for="i in 1" :key="i" class="msg">
        Material Design代表了一种简洁的艺术，我很喜欢这种艺术，我希望你们也能喜欢。
      </div>
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
.msg {
margin-bottom: 400px;
}
</style>
