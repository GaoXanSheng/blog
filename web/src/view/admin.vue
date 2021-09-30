<script setup lang="ts">
import DialogueWindow from "../components/DialogueWindow.vue";
import store from "../store";
import Drawer from "../components/drawer.vue";
</script>
<template>
  <DialogueWindow></DialogueWindow>
    <div v-if="store.state.Token.length>0">
    <Drawer></Drawer>
  </div>
</template>


<style scoped>

</style>