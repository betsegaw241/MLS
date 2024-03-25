
export interface Order {
  id: number;
  name: string;
  drug: string;
  phone: string;
  location: string;
  time: string;
  status: string;
}

export interface OrderComponentProps {
  orders: Order[];
}


