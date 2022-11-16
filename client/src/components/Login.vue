<template>
    <div class="bg-gray-100 flex shadow-xl rounded-xl items-center justify-center mx-auto w-64 h-64 flex-col">
        <form>
            <div class="flex flex-col mb-2 text-lg">
                <label class="mb-1 opacity-50">username</label>
                <input class="rounded-lg" type="text" placeholder="username...">
            </div>
            <div class="flex flex-col mb-2 text-lg">
                <label class="mb-1 opacity-50">password</label>
                <input class="rounded-lg" type="text" placeholder="password...">
            </div>
            <button class="opacity-100 hover:opacity-75 flex mx-auto text-center mt-4 text-lg bg-green-400 rounded-lg w-fit px-4 h-8 cursor-pointer">Login</button>
        </form>
    </div>
</template>

<script>    
export default {
    name: 'Home'
}
</script>