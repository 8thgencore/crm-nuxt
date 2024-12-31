import { useQuery } from '@tanstack/vue-query'
import { APPWRITE_DATABASE_ID, COLLECTION_DEALS } from '~/app.constants'
import { DB } from '~/lib/appwrite'

export function useComments() {
  const store = useDealSlideStore()
  const cardId = store.card?.id || ''

  return useQuery({
    queryKey: ['deal', cardId],
    queryFn: () => DB.getDocument(APPWRITE_DATABASE_ID, COLLECTION_DEALS, cardId),
  })
}
