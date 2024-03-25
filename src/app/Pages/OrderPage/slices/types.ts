export interface orderPageState {
  isgettingOrder: boolean;
  isOrderExist: boolean;
  order:IOrder;
}

export interface IOrder {
  [x: string]: any;
  id: number;
  name: string;
  drug: string;
  phone: string;
  location: string;
  time: string;
  status: string;
}
