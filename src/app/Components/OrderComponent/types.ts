

export interface OrderComponentProps {
  orders: OrderData;
  onPageChange: any;
  currentPage: number;
  pages: number;
  onSearch: () => void;
  onFilter: () => void;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

interface Pharmacy {
  name: string;
  email: string;
}

interface Drug {
  name: string;
  price: number;
  cost: number;
}

interface DeliveryAddress {
  location: {
    coordinates: [number, number];
    type: string;
  };
  address: string;
  phoneNumber: string;
}

interface Customer {
  name: string;
  email: string;
}

export interface Order {
  _id: string;
  deliveryAddress: DeliveryAddress;
  status: string;
  orderedTo: string;
  orderedBy: string;
  drugId: string;
  quantity: number;
  deliveryDate: string;
  createdAt: string;
  customer: Customer;
  pharmacy: Pharmacy;
  drug: Drug;
  profit: number;
}

interface OrderData {
  data: Order[];
}
