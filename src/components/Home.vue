<template>
    <h1>
        สวัสดีลูกค้า
    </h1>
    <h2>
        ยินดีต้อนรับในการใช้งานระบบของเรา
    </h2>
</template>

<script>
    export default{
        name: 'Home',
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
