import { DealStatus } from "~/types/deals.types";
import type { IColumn } from "./kanban.types";

export const KANBAN_DATA: IColumn[] = [
  {
    id: DealStatus.TODO,
    name: "Входящие",
    items: [],
  },
  {
    id: DealStatus.TO_BE_AGREED,
    name: "На согласовании",
    items: [],
  },
  {
    id: DealStatus.IN_PROGRESS,
    name: "В производстве",
    items: [],
  },
  {
    id: DealStatus.PRODUCED,
    name: "Произведено",
    items: [],
  },
  {
    id: DealStatus.DONE,
    name: "Завершенные",
    items: [],
  },
];
