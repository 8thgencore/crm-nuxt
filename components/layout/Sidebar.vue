<script setup lang="ts">
import { account } from "@/lib/appwrite";
import { useAuthStore, useIsLoadingStore } from "@/store/auth.store";

const authStore = useAuthStore();
const isLoadingStore = useIsLoadingStore();
const router = useRouter(); 

const logout = async () => {
    isLoadingStore.isLoading = true;
    await account.deleteSession("current");
    authStore.clean();
    await router.push("/login");
    isLoadingStore.isLoading = false;
}
</script>

<template>
    <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
        <NuxtLink to="/" class="mb-10 block">
            <NuxtImg src="/logo.svg" alt="Logo" width="140px" class="mx-auto" />
        </NuxtLink>
        <button @click="logout" class="absolute top-2 right-3 transition-colors hover:text-primary">
            <Icon name="line-md:logout" size="24" />
        </button>
        <LayoutMenu />
    </aside>
</template>
