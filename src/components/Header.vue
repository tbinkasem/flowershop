<template>

    <div class="nav">
        <router-link to="/">หน้าแรก</router-link>
        <router-link to="/add">เพิ่มร้านขายดอกไม้</router-link>
        <router-link to="update">ปรับปรุงร้านขายดอกไม้</router-link>
        <a href="#" v-on:click="signout">ออกจากระบบ</a>
    </div>

</template>

<script>

    export default{
        name: 'Header',
        methods:{
            signout(){
                localStorage.clear();
                this.$router.push({name: 'SignIn'});
            }
        }
    }

</script>

<style>

    .nav{
        background-color: #333;
        overflow: hidden;
    }

    .nav a{
        float: left;
        color: #f2f2f2;
        padding: 14px 16px;
        text-align: center;
        font-size: 16px;
        text-decoration: none;
        margin-right: 5px;
    }

    .nav a:hover{
        background: #ddd;
        color: #333;
    }

</style>