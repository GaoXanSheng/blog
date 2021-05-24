<template>
    <div class="mdui-ripple">
      <div class="mdui-img-fluid bg-img">
        <div class="portrait mdui-img-circle">
          <div class="add">
            <a href="https://gitee.com/ToSimplZ"><button class="mdui-btn mdui-btn-icon mdui-color-theme-accent mdui-ripple"><i class="mdui-icon material-icons">add</i></button></a>
          </div>
        </div>
      </div>
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
.add{
  top: 75px;
  left: 75px;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50px;

}
.add button{
  background-color: #ff4081;
}
.portrait{
  width: 100px;
  height: 100px;
  background-size: 100px;
  background-image: url("../assets/portrait.png");
  position: relative;
  margin: auto auto;
  top: 20%;
}
.mdui-ripple div.bg-img{
  height: 480px;
  background-image: url("../assets/bg.jpg");
}
</style>
