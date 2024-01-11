<template>
    <Header />
    <h1>สวัสดีลูกค้า</h1>
    <h2>ยินดีต้อนรับในการใช้งานระบบของเรา</h2>
</template>

<script>

    import Header from './Header.vue'

    export default{
        name: 'Home',
        components:{
            Header
        },
        mounted(){
            let user = localStorage.getItem("user-data")
            if(!user){
                this.$router.push({
                    name: 'SignUp'
                })
            }
        }
    }

</script>

<style>


</style>
