<template>
    <Header />
    <h1>สวัสดีลูกค้า</h1>
    <h2>ยินดีต้อนรับในการปรับปรุงข้อมูลในระบบ</h2>
</template>

<script>

    import Header from './Header.vue'

    export default{
        name: 'Update',
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
        },
        
    }

</script>

<style>


</style>
