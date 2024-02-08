<template>
    <div class="nav">
        <router-link to="/">หน้าแรก</router-link>
        <router-link to="/add">เพิ่มข้อมูล</router-link>
        <a href="#" v-on:click="signout">ออกจากระบบ</a>
    </div>
</template>

<script>

export default {
    name: 'Header',
    methods: {
        signout() {
            localStorage.clear();
            this.$router.push({ name: 'SignIn' });
        }
    }
}

</script>

<style></style>