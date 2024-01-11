<template>

    <img class="logo" alt="FlowerShop Logo" src="../assets/flowershop.png">
    <div class="signin">
        <input type="email" placeholder="อีเมล์" v-model="email">
        <input type="password" placeholder="รหัสผ่าน" v-model="password">
        <button @click="signin">เข้าใช้งานในระบบ</button>
        <p>
            <router-link to="/sign-up">ลงทะเบียนใช้งาน</router-link>
        </p>
    </div>

</template>

<script>

    import axios from 'axios'

    export default{

        name: 'SignIn',
        data(){
            return{
                email: '',
                password: ''
            }
        },

        methods:{

            async signin(){
                // console.warn(this.email,this.password)
                let result = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                )
                if(result.status == 200 && result.data.length > 0){
                    localStorage.setItem("user-data", JSON.stringify(result.data))
                    this.$router.push({
                        name: 'Home'
                    })
                }else{
                    alert("อีเมล์/รหัสผ่านไม่ถูกต้อง");
                    this.email = ''
                    this.password = ''
                }
            }

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