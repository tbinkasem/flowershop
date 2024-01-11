<template>

    <div class="nav">
        <a href="#">หน้าแรก</a>
        <a href="#">เพิ่มร้านขายดอกไม้</a>
        <a href="#">ปรับปรุงร้านขายดอกไม้</a>
        <a href="#">ออกจากระบบ</a>
    </div>

</template>

<script>

    export default{
        name: 'Header',
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