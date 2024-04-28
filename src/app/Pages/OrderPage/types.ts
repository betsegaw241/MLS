export interface Order {
  id: number;
  name: string;
  drugs: Drug[];
  phone: string;
  location: string;
  time: string;
  status: string;
};
export interface OrderComponentProps {
  orders: object;
};

interface Drug {
  drugId: string;
  stockId: string;
  quantity?: number;
  price?: number;
  drugName?: string;
}
