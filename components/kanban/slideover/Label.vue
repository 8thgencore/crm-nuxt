<script setup lang="ts">



const props = defineProps({
    labelText: {
        type: String,
        default: '',
    }
})


</script>

<template>
    <div class="mb-3">
        <label v-if="labelText" class="opacity-75 mv-0.5 block text-ws">
            {{ labelText }}
        </label>

        <div class="text-base">
            <slot />
        </div>
    </div>

</template>