<script lang="ts">
import instance from '../../api/index'
import store from "../../store";
export default {
  name: "Settings",
  data(){
    return {
      puTonFile:'',
      name:'',
      github:''
    }
  },methods:{
    update(){
      instance.instance.post('/update',{
        token:store.state.Token,
        puTonFile: this.puTonFile,
        name: this.name,
        github: this.github
      }).then(res=>{
        mdui.snackbar({
          message: res.data.msg
        });
      })
    }
  }
  ,mounted() {
    this.$nextTick(function () {
      instance.instance.get('/settings').then(res=>{
        this.puTonFile = res.data.puTonFile
        this.name=res.data.name
        this.github=res.data.github
      })
    })
  }
}
</script>

<template>
  <div class="main">
    <div class="mdui-textfield">
      <label class="mdui-textfield-label">User Name</label>
      <input class="mdui-textfield-input" v-model="name"/>
    </div>
    <div class="mdui-textfield">
      <label class="mdui-textfield-label">puTonFile</label>
      <input class="mdui-textfield-input" v-model="puTonFile"/>
    </div>
    <div class="mdui-textfield">
      <label class="mdui-textfield-label">Github</label>
      <input class="mdui-textfield-input" v-model="github"/>
    </div>
    <div class="mdui-textfield">
    <button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" @click="update()">update</button>
  </div>
  </div>
</template>

<style scoped>
.main{
  position: relative;
}
</style>