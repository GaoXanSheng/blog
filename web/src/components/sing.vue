
<script lang="ts">
export default {
  name:'sing'
}
</script>

<template>
  <router-link to="/admin">
    <a class="triangle-topright"></a>
  </router-link>
</template>

<style scoped>
.triangle-topright{
  right: 0;
  top: 0;
  position: fixed;
  width: 0px;
  height: 0px;
  border-top: 30px solid #FF80AB;
  border-left: 30px solid transparent;
  transition-duration: 1s;
  transition-timing-function: linear;
}
.triangle-topright:hover {
  border-top: 60px solid #FF80AB;
  border-left: 60px solid transparent;
}
</style>