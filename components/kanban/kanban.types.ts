import type { DealStatus } from '~/types/deals.types'

export interface ICard {
  id: string
  name: string
  price: number
  companyName: string
  status: string
  $createdAt: string
}

export interface IColumn {
  id: DealStatus
  name: string
  items: ICard[]
}
