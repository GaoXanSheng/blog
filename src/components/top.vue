<template>
    <div class="mdui-appbar mdui-shadow-0">
      <div class="mdui-toolbar">
        <a href="javascript:;" class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">http</i></a>
        <a href="javascript:;" class="mdui-typo-title">{{ this.$store.state.name }}</a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'top',
  props: {
    msg: String
  }
}
</script>
<style lang="scss">

</style>
