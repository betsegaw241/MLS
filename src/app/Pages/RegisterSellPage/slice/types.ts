export interface registerSellPageState {
  errorMessage: string;
  isRegsterd: boolean;
  loading: boolean;
  drug: IDrug[];
}
export interface IDrug {
  stockId: string;
  quantity: string;
  drug: string;
  pharmacyId: string | undefined;
}
