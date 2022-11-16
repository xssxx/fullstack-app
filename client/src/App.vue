<script >
import { RouterLink, RouterView } from 'vue-router'
import Login from './components/Login.vue'
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Login,
    Navbar
  }
}
</script>

<template>
  <div class="flex h-screen content-center items-center justify-center">
    <Navbar />
    <RouterView />
  </div>
</template>
