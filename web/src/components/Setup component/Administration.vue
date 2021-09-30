<script lang="ts">
import instance from '../../api/index'
import store from "../../store";
export default {
  name: "Administration",
  data(){
    return {
      manage:''
    }
  },
  methods:{
    Delete(id: string, title: string){
      instance.instance.post('/manage',{
        token:store.state.Token,
        title:title,
        id:id
      }).then(res=>{
        instance.instance.get('/data').then(res=>{
          this.manage=res.data
        })
        mdui.snackbar({
          message: res.data.msg
        })
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      instance.instance.get('/data').then(res=>{
        this.manage=res.data
      })
    })
  }
}
</script>

<template>
  <div class="main">
    <div class="mdui-table-fluid">
      <table class="mdui-table">
        <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Data</th>
          <th>manage</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="i in manage" key="i">
          <td>{{i.id}}</td>
          <td>{{ i.h1 }}</td>
          <td>{{i.data}}</td>
          <td>
            <button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" @click="Delete(i.id,i.h1)">delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.main{
  position: relative;
}
</style>