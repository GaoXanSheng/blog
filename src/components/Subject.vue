<template>
    <div class="mdui-ripple">
      <div class="mdui-img-fluid bg-img">
        <div class="portrait mdui-img-circle">
          <div class="add">
            <a :href="this.$store.state.github">
              <button class="mdui-btn mdui-btn-icon mdui-color-theme-accent mdui-ripple">
                <i class="mdui-icon material-icons">add</i>
              </button>
            </a>
          </div>
        </div>
        <h1 class="doc-title mdui-text-color-theme name">{{ this.$store.state.name }}</h1>
<!--        上面是个人id标签-->
      </div>
    </div>
</template>

<script>

export default {
  name: 'Subject',
  props: {
    msg: String
  },
  data: function () {
    return {
      portrait: {
        backgroundImage: 'url(' + this.$store.state.portrait + ')'
      },
      bgImg: {
        backgroundImage: 'url(' + this.$store.state.background + ')'
      }
    }
  }
}
</script>
<style lang="scss">
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
.add button{
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
.mdui-ripple div.bg-img{
  height: 750px;
  background-size: 100%;
  background-image: url("../assets/m-bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
}
@media(min-width:700px){
  .mdui-ripple div.bg-img{
    background-image: url("../assets/bg.jpg");
  }
}
</style>
