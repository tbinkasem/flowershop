<template>
    <Header />
    <h1>สวัสดี {{ fullname }} ค่ะ</h1>
    <h2>ยินดีต้อนรับในการเพิ่มข้อมูลในระบบ</h2>
    <div class="add">
        <form>
            <input type="text" name="sname" placeholder="ชื่อร้านดอกไม้" v-model="flowershops.sname">
            <input type="tel" name="contact" placeholder="โทรศัพท์ติดต่อ" v-model="flowershops.contact">
            <input type="text" name="address" placeholder="ที่อยู่" v-model="flowershops.address">
            <button @click="addFlowershop">เพิ่มข้อมูลร้านขายดอกไม้</button>
        </form>
    </div>
</template>

<script>

import Header from './Header.vue'
import axios from 'axios'

export default {
    name: 'Add',
    components: {
        Header
    },
    data() {
        return {
            fullname: '',
            flowershops: {
                sname: '',
                contact: '',
                address: ''
            }
        }
    },
    methods: {
        async addFlowershop() {
            let result = await axios.post("http://192.168.10.20:3000/flowershops", {
                sname: this.flowershops.sname,
                contact: this.flowershops.contact,
                address: this.flowershops.address
            })
            if (result.status == 201) {
                this.$router.push({
                    name: 'HomePage'
                })
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-data")
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
        this.fullname = JSON.parse(user).fullname
    },

}

</script>

<style></style>
