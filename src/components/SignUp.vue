<template>

    <img class="logo" alt="FlowerShop Logo" src="../assets/flowershop.png">
    <div class="signup">
        <input type="text" placeholder="ชื่อ-สกุล" v-model="fullname">
        <input type="email" placeholder="อีเมล์" v-model="email">
        <input type="password" placeholder="รหัสผ่าน" v-model="password">
        <button v-on:click="signup">ลงทะเบียนใช้งาน</button>
        <p>
            <router-link to="/sign-in">ใช้งานในระบบ</router-link>
        </p>
    </div>


</template>

<script>

    import axios from 'axios'

    export default{

        name: 'SignUp',

        data(){
            return{
                fullname: '',
                email: '',
                password: ''
            }
        },

        methods:{
            async signup(){
                let result = await axios.post("http://localhost:3000/users",{
                    fullname: this.fullname,
                    email: this.email,
                    password: this.password
                });
                if(result.status == 201){
                    // alert("ลงทะเบียนใช้งานเรียบร้อยแล้ว");
                    localStorage.setItem("user-data", JSON.stringify(result.data))
                    this.$router.push({
                        name: 'Home'
                    })
                }else{
                    alert("ไม่สามารถลงทะเบียนใช้งานได้");
                }
            },
        },

        mounted(){
            let user = localStorage.getItem("user-data")
            if(user){
                this.$router.push({
                    name: 'Home'
                })
            }
        }

    }

</script>

<style>



</style>
