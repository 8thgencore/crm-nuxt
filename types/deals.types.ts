export interface IBaseField {
    $id: string;
    $createdAt: string;
}

export interface ICustomer extends IBaseField {
  name: string;
  email: string;
  avatar_url: string;
  from_source?: string;
}

export interface IComment extends IBaseField {
  text: string;
}

export enum DealStatus {
  TODO = 'todo',
  TO_BE_AGREED = 'to-be-agreed',
  IN_PROGRESS = 'in-progress',
  PRODUCED = 'produced',
  DONE = 'done'
}

export interface IDeal extends IBaseField {
  name: string;
  price: number;
  status: DealStatus;
  comments: IComment[];
  customer: ICustomer;
}
