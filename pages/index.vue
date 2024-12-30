<script setup lang="ts">

import type { ICard, IColumn } from '~/components/kanban/kanban.types';
import { useKanbanQuery } from '~/components/kanban/useKanbanQuery';
import { convertCurrency } from '~/lib/convertCurrency';
import dayjs from 'dayjs';
import { DB } from '~/lib/appwrite';
import { APPWRITE_DATABASE_ID, COLLECTION_DEALS } from '~/app.constants';
import type { DealStatus } from '~/types/deals.types';
import { useMutation } from '@tanstack/vue-query';
import { generateColumnStyle } from '@/components/kanban/generate-gradient'

useSeoMeta({
    title: 'Home | CRM System',
    description: 'Home | CRM System',
})

const dragCardRef = ref<ICard | null>(null);
const sourceColumnRef = ref<IColumn | null>(null);
const { data, isLoading, refetch } = useKanbanQuery()
// const store = useDealSlideStore()


type TypeMutationVariables = {
    docId: string
    status?: DealStatus
}

const { mutate } = useMutation({
    mutationKey: ['move card'],
    mutationFn: ({ docId, status }: TypeMutationVariables) =>
        DB.updateDocument(APPWRITE_DATABASE_ID, COLLECTION_DEALS, docId, {
            status,
        }),
    onSuccess: () => {
        refetch()
    },
})

function handleDragStart(card: ICard, column: IColumn) {
    dragCardRef.value = card
    sourceColumnRef.value = column
}

function handleDragOver(event: DragEvent) {
    event.preventDefault()
}

function handleDrop(targetColumn: IColumn) {
    if (dragCardRef.value && sourceColumnRef.value) {
        mutate({ docId: dragCardRef.value.id, status: targetColumn.id })
    }
}
</script>

<template>
    <div class="p-10">
        <h1 class="font-bold text-2xl mb-10">CRM System</h1>
        <div v-if="isLoading">Loading...</div>
        <div v-else>
            <div class="grid grid-cols-5 gap-16">
                <div v-for="(column, index) in data" :key="column.id" @dragover="handleDragOver"
                    @drop="() => handleDrop(column)" class="min-h-screen">
                    <div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center"
                        :style="generateColumnStyle(index, data?.length)">
                        {{ column.name }}
                    </div>
                    <div>
                        <KanbanCreateDeal :refetch="refetch" :status="column.id" />
                        <UICard v-for="card in column.items" :key="card.id" class="mb-5" draggable="true"
                            @dragstart="() => handleDragStart(card, column)">
                            <UICardHeader role="button" @click="store.set(card)">
                                <UICardTitle>{{ card.name }}</UICardTitle>
                                <UICardDescription class="mt-2 block"> {{ convertCurrency(card.price) }}
                                </UICardDescription>
                            </UICardHeader>
                            <UICardContent class="text-xs">
                                <div>Компания</div>
                                {{ card.companyName }}
                            </UICardContent>
                            <UICardFooter>
                                {{ dayjs(card.$createdAt).format('DD MMMM YYYY') }}
                            </UICardFooter>
                        </UICard>
                    </div>
                </div>
            </div>
            <KanbanSlideover />
        </div>
    </div>
</template>