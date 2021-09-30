<script lang="ts">
import instance from '../api/index'
import store from "../store";
export default {
  name: "DialogueWindow",
  data() {
    return {
      name:'',
      password:'',
      Token: ''
    }
  },
  methods:{
    backOff(){
      window.history.back(-1)
    },
    GetToken(){
      instance.instance.post('/Token',{
        name:this.name,
        password:this.password
      }).then(res=>{
        if (res.data.msg) {
          mdui.snackbar({
            message: res.data.msg
          });
          window.history.back(-1)
        }else {
          store.state.Token=res.data.data
        }
      })
    }
  },
  mounted() {
    this.$nextTick(function () {
      let inst = new mdui.Dialog('#sing');
      inst.open();
    })
  }
}
</script>

<template>
<div>
  <div class="mdui-dialog" id="sing">
    <div class="mdui-dialog-content">
      <div class="mdui-dialog-title">控制台</div>
      请在下方输入账号和密码
      <div>
        <div class="mdui-textfield mdui-textfield-floating-label">
          <label class="mdui-textfield-label">Name</label>
          <input class="mdui-textfield-input" v-model="name"/>
        </div>
        <div class="mdui-textfield mdui-textfield-floating-label">
          <label class="mdui-textfield-label">Password</label>
          <input class="mdui-textfield-input" type="password" v-model="password"/>
        </div>
      </div>
      <div class="mdui-dialog-actions">
          <button class="mdui-btn mdui-ripple" mdui-dialog-close @click="backOff()">取消</button>
        <button class="mdui-btn mdui-ripple" mdui-dialog-confirm @click="GetToken()">确定</button>
      </div>
    </div>
  </div>
</div>
</template>


<style scoped>

</style>