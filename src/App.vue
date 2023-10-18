<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const getList = () => {
  console.log(router, route)
  router.go(-1)
}
import userUserStore from '@/stores/user'
const userstores = userUserStore()
</script>
<template>
  <div>
    <router-view></router-view>
    <button @click="$router.push('/home')">home</button>
    <button @click="getList">go(-1)</button>
    <hr />
    <el-button type="infor">infor</el-button>
    <hr />
    <p>{{ userstores.token }}</p>
    <el-button type="primary" @click="userstores.setToken('123331213132')"
      >登录</el-button
    >
    <el-button type="danger" @click="userstores.removeToken()">退出</el-button>
  </div>
</template>
