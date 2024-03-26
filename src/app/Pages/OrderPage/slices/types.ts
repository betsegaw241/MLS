export interface orderPageState {
  isgettingOrder: boolean;
  isOrderExist: boolean;
  order:IOrder;
  orders:[];
}

export interface IOrder {
  id: number;
  name: string;
  drug: string;
  phone: string;
  location: string;
  time: string;
  status: string;
}
