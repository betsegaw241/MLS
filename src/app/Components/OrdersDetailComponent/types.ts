export interface Location {
  coordinates: [number, number];
  type: string;
}

export interface DeliveryAddress {
  location: Location;
  address: string;
  phoneNumber: string;
}

export interface Customer {
  name: string;
  email: string;
}

export interface Pharmacy {
  name: string;
  email: string;
}

export interface SenderAccount {
  accountNumber: string;
  bankName: string;
  accountType: string;
}

export interface ReceiverAccount {
  accountNumber: string;
  bankName: string;
  accountType: string;
}

export interface Transaction {
  senderAccount: SenderAccount;
  receiverAccount: ReceiverAccount;
  reason: string;
}

export interface IOrder {
  [x: string]: any;
  _id: string;
  deliveryAddress: DeliveryAddress;
  status: string;
  drugId: string;
  quantity: number;
  deliveryDate: string; // You might want to use Date type here instead of string
  transactionId: string;
  orderedAt: string; // You might want to use Date type here instead of string
  customer: Customer;
  pharmacy: Pharmacy;
  drugs: Drug[];
  transaction: Transaction;
}
export interface IorderDetailComponent {
  order: IOrder;
  onRejectClick: () => void;
  onAcceptClick: () => void;

  isUpdating: boolean;
}

interface Drug {
  drugId: string;
  stockId: string;
  quantity?: number;
  price?: number;
  drugName?: string;
  expiredDate: string;
}
