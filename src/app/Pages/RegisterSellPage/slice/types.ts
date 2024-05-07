export interface registerSellPageState {
  errorMessage: string;
  isRegsterd: boolean;
  loading: boolean;
  drug: IDrug[];
}
export interface IDrug {
  name: string;
  _id: string;
  batch: string;
  quantity: number;
}
