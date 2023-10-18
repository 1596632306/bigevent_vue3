import { defineStore } from 'pinia'
import { ref } from 'vue'
// 用户模块
const useUserStore = defineStore(
  'big-user',
  () => {
    const token = ref('') //定义token
    const setToken = (t) => (token.value = t) //设置token
    const removeToken = () => (token.value = '') //移除token
    return { token, setToken, removeToken }
  },
  {
    persist: true //持久化存储
  }
)
export default useUserStore
