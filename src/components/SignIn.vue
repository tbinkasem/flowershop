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

    export default{

        name: 'SignIn',
        data(){
            return{
                email: '',
                password: ''
            }
        },

        methods:{

            signin(){
                console.warn(this.email,this.password)
            }

        }
    }

</script>

<style>



</style>