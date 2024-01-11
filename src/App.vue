<template>

  <router-view />

</template>

<script>

export default {

  name: 'App',
  
}

</script>

<style>

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body{
    padding: 0;
    margin: 0;
  }

  .logo{
    width: 200px;
    padding-bottom: 20px;
  }

  .signup input, .signin input{
    display: block;
    width: 300px;
    height: 40px;
    padding-left: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    border: 1px dashed green;
  }

    .signup button, .signin button{
        color: white;
        width: 320px;
        height: 40px;
        border: 1px dashed green;
        background-color: green;
        cursor: pointer;
    }

</style>
