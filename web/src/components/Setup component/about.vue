<script lang="ts">
export default {
  name: "About"
}
</script>

<template>
  <div class="main">
    <div class="mdui-img-fluid bg">
      <div class="portrait mdui-img-circle">
        <div class="add">
          <button class="mdui-btn mdui-btn-icon mdui-color-theme-accent mdui-ripple"
                  style="background: rgb(255, 64, 129);"><i class="mdui-icon material-icons">add</i></button>
        </div>
      </div>
      <h1 class="doc-title mdui-text-color-theme name">高旭生</h1></div>
  </div>
</template>

<style scoped>
.main {
  position: relative;
  width: 100%;
  height: 700px;
  background: url("src/assets/bg.jpg") center center / cover;
}
.bg{
  position: absolute;
  left: 43%;
  margin-top: 15%;
}
</style>