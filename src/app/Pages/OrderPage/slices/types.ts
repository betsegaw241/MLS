export interface orderPageState {
  isgettingOrder: boolean;
  isOrderExist: boolean;
  order:Iorder;
  orders:[];
}

export interface Iorder {
  data: any;
  length: number;
  id: number;
  name: string;
  drugs: Drug[];
  phone: string;
  location: string;
  time: string;
  status: string;
  totalPages: number;
}

interface Drug {
  drugId: string;
  stockId: string;
  quantity?: number;
  price?: number;
  drugName?: string;
}