<template>
  <div class="mdui-bottom-nav">
    <a href="javascript:;" class="mdui-ripple mdui-bottom-nav-active">
      <i class="mdui-icon material-icons">history</i>
      <label>Recents</label>
    </a>
    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-icon material-icons">favorite</i>
      <label>Favorites</label>
    </a>
    <a href="javascript:;" class="mdui-ripple">
      <i class="mdui-icon material-icons">location_on</i>
      <label>Nearby</label>
    </a>
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

</style>
