<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import { COLLECTION_CUSTOMERS, APPWRITE_DATABASE_ID } from '~/app.constants'
import { DB } from '~/lib/appwrite';
import type { ICustomer } from '~/types/deals.types'

useSeoMeta({
  title: 'Customers | CRM System',
})

const { data: customers, isLoading } = useQuery({
  queryKey: ['customers'],
  queryFn: () => DB.listDocuments(APPWRITE_DATABASE_ID, COLLECTION_CUSTOMERS),
})
</script>

<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">Наши клиенты</h1>
    <div v-if="isLoading">Loading...</div>
    <UITable v-else>
      <UITableHeader>
        <UITableRow>
          <UITableHead class="w-[200px]">Изображение</UITableHead>
          <UITableHead class="w-[300px]">Наименование</UITableHead>
          <UITableHead class="w-[200px]">Email</UITableHead>
          <UITableHead>Откуда клиент</UITableHead>
        </UITableRow>
      </UITableHeader>
      <UITableBody>
        <UITableRow
            v-for="customer in (customers?.documents as unknown as ICustomer[])"
            :key="customer.$id"
        >
          <UITableCell>
            <NuxtLink :href="`/customers/edit/${customer.$id}`">
              <NuxtImg
                  :src="customer.avatar_url"
                  :alt="customer.name"
                  width="50"
                  height="50"
                  class="rounded-full"
              />
            </NuxtLink>
          </UITableCell>
          <UITableCell class="font-medium">
            {{ customer.name }}
          </UITableCell>
          <UITableCell>{{ customer.email }}</UITableCell>
          <UITableCell>{{ customer.from_source }}</UITableCell>
        </UITableRow>
      </UITableBody>
    </UITable>
  </div>
</template>