<script lang="ts">
import axios from "axios";
export default {
  name: 'PictureHeader',
  props: {
    msg: String
  },
  data(){
    return {
      name:"GaoXuShenG"
    }
  },
  mounted() {
    this.$nextTick(function () {
      axios.get('http://www.yunmouren.top:8000/admin').then(res=>{
        this.$data.name = res.data.data
      })
    })
  }
}
</script>
<template>
    <div class="mdui-ripple">
      <div class="mdui-img-fluid bg-img">
        <div class="portrait mdui-img-circle">
          <div class="add">
            <a :href="this.$data.name.github">
              <button class="mdui-btn mdui-btn-icon mdui-color-theme-accent mdui-ripple " style="background-color: #ff4081">
                <i class="mdui-icon material-icons">add</i>
              </button>
            </a>
          </div>
        </div>
        <h1 class="doc-title mdui-text-color-theme name">{{this.$data.name.name}}</h1>
      </div>
    </div>
</template>


<style>
.name{
  text-align: center;
  position: relative;
  top: 20%;
}
.add{
  top: 75px;
  left: 75px;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50px;
}
.add>button{
  background-color: #ff4081;
}
.portrait{
  width: 100px;
  height: 100px;
  background-size: 100px;
  position: relative;
  margin: auto auto;
  top: 20%;
  background-image: url("../assets/portrait.jpg");
}
.mdui-ripple>div.bg-img{
  height: 770px;
  background: url("../assets/m-bg.jpg") center center / cover;
}
@media(min-width:700px){
  .mdui-ripple div.bg-img{
    background-image: url("../assets/bg.jpg");
  }
}
</style>
