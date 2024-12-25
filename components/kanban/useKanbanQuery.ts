import { useQuery } from "@tanstack/vue-query";
import {
  APPWRITE_COLLECTION_DEALS,
  APPWRITE_DATABASE_ID,
} from "~/app.constants";
import { DB } from "~/lib/appwrite";
import { KANBAN_DATA } from "./kanban.data";
import type { IDeal } from "~/types/deals.types";

export function useKanbanQuery() {
  return useQuery({
    queryKey: ["deals"],
    queryFn: () =>
      DB.listDocuments(APPWRITE_DATABASE_ID, APPWRITE_COLLECTION_DEALS),
    select(data) {
      const newBoard = [...KANBAN_DATA];
      const deals = data.documents as unknown as IDeal[];

      for (const deal of deals) {
        const column = newBoard.find((column) => column.id === deal.status);
        if (column) {
          column.items.push({
            id: deal.$id,
            name: deal.name,
            price: deal.price,
            companyName: deal.customer.name,
            status: deal.status,
            $createdAt: deal.$createdAt,
          });
        }
      }

      return newBoard;
    },
  });
}
