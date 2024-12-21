<script setup lang="ts">
useSeoMeta({
    title: "Login | CRM System",
});

const emailRef = ref("");
const passwordRef = ref("");
const nameRef = ref("");


</script>

<template>
    <div class="flex justify-center items-center min-h-screen w-full">
        <div class="rounded bg-sidebar w-1/4 p-5">
            <h1 class="text-2xl font-bold text-center mb-5">Login</h1>

            <form>
                <UIInput v-model="emailRef" placeholder="Email" type="email" class="mb-3" />
                <UIInput v-model="passwordRef" placeholder="Password" type="password" class="mb-3" />
                <UIInput v-model="nameRef" placeholder="Name" type="text" class="mb-3" />
                <div class="flex items-center justify-center gap-5">
                    <UIButton type="button">Login</UIButton>
                    <UIButton type="button">Register</UIButton>
                </div>
            </form>
        </div>
    </div>
</template>
