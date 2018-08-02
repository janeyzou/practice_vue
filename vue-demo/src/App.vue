<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    this.getData();
  },
  methods:{
    getData(){
        this.$ajax({
          method: "get",
          url: "https://www.easy-mock.com/mock/5b6128486551d73d713927e3/example/getDate",
          dataType: "json"
        }).then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log(err)
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
