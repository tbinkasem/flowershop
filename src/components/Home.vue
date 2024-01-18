<template>
    <Header />
    <h1>สวัสดี {{fullname}} ค่ะ</h1>
    <h2>ยินดีต้อนรับในการใช้งานระบบของเรา</h2>
</template>

<script>

    import Header from './Header.vue'

    export default{
        name: 'Home',
        data(){
            return{
                fullname: '',
            }
        },
        components:{
            Header
        },
        mounted(){
            let user = localStorage.getItem("user-data");
            this.fullname = JSON.parse(user).fullname
            if(!user){
                this.$router.push({
                    name: 'SignUp'
                })
            }
        },
        
    }

</script>

<style>


</style>
