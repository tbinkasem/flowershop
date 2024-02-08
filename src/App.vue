<template>
  <router-view />
</template>

<script>

export default {

  name: 'App',

  mounted() {
    document.title = '[65309010000] ระบบจัดการร้านขายดอกไม้'
  }

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

body {
  padding: 0;
  margin: 0;
}

.logo {
  width: 200px;
  padding-bottom: 20px;
}

.add input,
.signup input,
.signin input {
  display: block;
  width: 300px;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 1px dashed green;
}

.add button,
.del,
.signup button,
.signin button {
  color: white;
  width: 320px;
  height: 40px;
  border: 1px dashed green;
  background-color: green;
  cursor: pointer;
}

.del {
  color: white;
  width: 100px;
  height: 30px;
  border: 1px dashed green;
  background-color: #f74105;
  cursor: pointer;
}

table {
  display: flexbox;
  margin-left: auto;
  margin-right: auto;
  width: 85%;

}

td {
  padding: 10px;
  border: 1px solid green;
}

th {
  padding: 15px;
  border: 1px solid rgb(3, 23, 248);
}

.nav {
  background-color: #333;
  overflow: hidden;
}

.nav a {
  float: left;
  color: #f2f2f2;
  padding: 14px 16px;
  text-align: center;
  font-size: 16px;
  text-decoration: none;
  margin-right: 5px;
}

.nav a:hover {
  background: #ddd;
  color: #333;
}

.green {
  background-color: green;
  text-decoration: none;
  color: white;
  padding: 6px 25px;
}
</style>
