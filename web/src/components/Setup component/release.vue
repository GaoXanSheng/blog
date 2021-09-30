<script lang="ts">
import instance from '../../api/index'
import store from "../../store";
export default {
  name: "release",
  data(){
    return {
      title:"",
      article:""
    }
  },
  methods:{
    submit(){
      instance.instance.post('/article',{
        token:store.state.Token,
        title:this.title,
        article:this.article
      }).then(res=>{
        this.title=null
        this.article=null
        mdui.snackbar({
          message: res.data.msg
        });
      })
    }
  }
}
</script>

<template>
<div class="main">
  <div class="mdui-textfield mdui-textfield-floating-label">
    <label class="mdui-textfield-label">Title</label>
    <input class="mdui-textfield-input" v-model="title"/>
  </div>
  <div class="mdui-textfield">
    <textarea class="mdui-textfield-input" v-model="article" placeholder="content"></textarea>
  </div>
  <div class="mdui-col">
    <button class="mdui-btn mdui-btn-block mdui-color-pink-200 mdui-ripple" @click="submit()">Submit article</button>
  </div>
</div>
</template>

<style scoped>
.main{
  position: relative;
}
</style>