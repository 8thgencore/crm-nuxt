<script setup lang="ts">
import { account } from '~/lib/appwrite'
import { useIsLoadingStore } from '~/store/auth.store'
import { v7 as uuid } from 'uuid'

useSeoMeta({
  title: 'Login | CRM System',
})

const emailRef = ref('')
const passwordRef = ref('')
const nameRef = ref('')

const isLoadingStore = useIsLoadingStore()
const authStore = useAuthStore()
const router = useRouter()

const login = async () => {
  isLoadingStore.set(true)

  await account.createEmailPasswordSession(emailRef.value, passwordRef.value)

  const response = await account.get()
  if (response) {
    authStore.set({
      email: response.email,
      name: response.name,
      status: response.status,
    })
  }

  emailRef.value = ''
  passwordRef.value = ''
  nameRef.value = ''

  isLoadingStore.set(false)

  await router.push('/')
}

const register = async () => {
  isLoadingStore.set(true)

  await account.create(uuid(), emailRef.value, passwordRef.value, nameRef.value)
  console.log(uuid())

  await login()
}
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
          <UIButton type="button" @click="login">Login</UIButton>
          <UIButton type="button" @click="register">Register</UIButton>
        </div>
      </form>
    </div>
  </div>
</template>
