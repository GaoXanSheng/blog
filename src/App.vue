<script setup lang="ts">
import PictureHeader from './components/Picture_header.vue'
import Information from './components/Information.vue'
import BottomNavigationBar from "./components/BottomNavigationBar.vue";
</script>

<template>
  <PictureHeader></PictureHeader>
  <Information></Information>
  <BottomNavigationBar></BottomNavigationBar>

</template>

<style>
a:active, a:hover, a:link, a:visited {
  color: #000;
}
body {
  background-repeat: no-repeat;
}
</style>
