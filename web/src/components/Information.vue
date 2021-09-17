<script lang="ts">
import axios from "axios";
export default {
  name: 'information',
  props: {
    msg: String
  },
  data(){
    return {
      computerFile:"",
    }
  },
  mounted() {
    this.$nextTick(function () {
        axios.get('http://www.yunmouren.top:8000/data').then(res=>{
          this.$data.computerFile = res.data
        })
    })
  }
}
const data:number =0
</script>
<template>
  <div class="mdui-container doc-container">
    <div class="mdui-typo">
      <hr/>
    </div>
    <div class="mdui-typo">
      <h1><a href="https://www.mdui.org/design/"><strong>M</strong>aterial <strong>D</strong>esign</a></h1>
      <blockquote>
        <p>Thaumaturgy... which giveth certain order to make strange works, of the sense to be perceived and of men greatly to be wondered at.MathematicallPraeface.</p>
        <footer>John Dee(1570) ——《Euclid's Elements》</footer>
      </blockquote>
      <div class="mdui-typo" v-for="i in computerFile" :key="i">

        <h1>{{i.title}}</h1>
        <p>{{i.data}}</p>

      </div>
      <div class="bottom"></div>
    </div>
  </div>
</template>


<style>
.bottom {
margin-bottom: 400px;
}
</style>
