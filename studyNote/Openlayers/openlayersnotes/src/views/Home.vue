<template>
  <div class="home">
    <button @click="clickBtn">点击</button>
    <router-view></router-view>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  methods: {
    clickBtn(){
      this.$router.push('/HelloMap')
    }
  },
}
</script>
