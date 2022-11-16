<template>
    <nav class="fixed flex h-12 w-full top-0 justify-around bg-green-300 items-center text-xl shadow-lg">
        <div class="cursor-pointer font-bold">
            <h1>XSSXX</h1>
        </div>
        <div class="flex flex-row cursor-pointer">
            <RouterLink to='/'><li class="px-4 hover:underline">Home</li></RouterLink>
            <RouterLink to='/login'><li class="px-4 hover:underline">Login</li></RouterLink>
            <RouterLink to='/register'><li class="px-4 hover:underline">Register</li></RouterLink>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
    name: 'Navbar'
}
</script>
