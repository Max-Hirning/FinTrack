export interface IEntry {
  date: string;
  typeId: string;
  ammount: number;
  accountId: string;
  categoryId: string;
  description: string;
}

export interface ISearchEntriesQuery {
  to: string;
  from: string;
}