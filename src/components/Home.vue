<template>
    <Header />
    <h1>สวัสดี {{ fullname }} ค่ะ</h1>
    <h2>ยินดีต้อนรับในการใช้งานระบบของเรา</h2>
    <table>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CONTACT</th>
            <th>ADDRESS</th>
            <th colspan="2">ACTIONS</th>
        </tr>
        <tr v-for="item in flowershops" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.sname }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
            <td>
                <router-link :to="'/update/' + item.id" :class="bgColour">ปรับปรุง</router-link>
            </td>
            <td>
                <button class="del" @click="deleteFlowershop(item.id)">ลบข้อมูล</button>
            </td>
        </tr>
    </table>
</template>

<script>

import Header from './Header.vue'
import axios from 'axios'

export default {
    name: 'HomePage',
    data() {
        return {
            fullname: '',
            flowershops: [],
            bgColour: 'green'
        }
    },
    components: {
        Header
    },
    methods: {
        async deleteFlowershop(id) {
            let result = await axios.delete("http://192.168.10.20:3000/flowershops/" + id);
            if (result.status == 200) {
                this.$router.push({
                    name: 'HomePage'
                })
                this.loadData();
            }
        },
        async loadData() {
            let user = localStorage.getItem("user-data");
            if (!user) {
                this.$router.push({
                    name: 'SignIn'
                })
            }
            this.fullname = JSON.parse(user).fullname
            let result = await axios.get("http://192.168.10.20:3000/flowershops");
            this.flowershops = result.data;
        }
    },
    async mounted() {
        this.loadData();
    },

}

</script>

<style></style>
