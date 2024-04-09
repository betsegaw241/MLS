export interface orderPageState {
  isgettingOrder: boolean;
  isOrderExist: boolean;
  order:Iorder;
  orders:[];
}

export interface Iorder {
  length: number;
  id: number;
  name: string;
  drug: string;
  phone: string;
  location: string;
  time: string;
  status: string;
}
