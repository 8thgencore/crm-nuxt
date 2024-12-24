<script setup lang="ts">
import type { ICard, IColumn } from '~/components/kanban/kanban.types';


useSeoMeta({
    title: 'Home | CRM System',
    description: 'Home | CRM System',
})

const dragCardRef = ref<ICard | null>(null);
const sourceColumnRef = ref<IColumn | null>(null);

</script>

<template>
    <div class="p-10">
        <h1 class="text-2xl font-bold mb-10">CRM System</h1>
        <div>
            <UICard class="mb-3" draggable="true">
                <UICardHeader role="button"> Name card
                </UICardHeader>
            </UICard>

        </div>
    </div>

</template>