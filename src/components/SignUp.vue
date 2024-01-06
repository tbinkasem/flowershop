<template>

    <img class="logo" alt="FlowerShop Logo" src="../assets/flowershop.png">
    <div class="signup">
        <input type="text" placeholder="ชื่อ-สกุล" v-model="fullname">
        <input type="email" placeholder="อีเมล์" v-model="email">
        <input type="password" placeholder="รหัสผ่าน" v-model="password">
        <button v-on:click="signup">ลงทะเบียนใช้งาน</button>
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

    .logo{
        width: 200px;
        padding-bottom: 20px;
    }

    .signup input{
        display: block;
        width: 300px;
        height: 40px;
        padding-left: 20px;
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        border: 1px dashed green;
    }

    .signup button{
        color: white;
        width: 320px;
        height: 40px;
        border: 1px dashed green;
        background-color: green;
        cursor: pointer;
    }

</style>
