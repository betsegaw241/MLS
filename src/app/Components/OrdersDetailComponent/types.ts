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

export interface Drug {
  name: string;
  price: number;
  cost: number;
  expiredDate: string; // You might want to use Date type here instead of string
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
  drug: Drug;
  transaction: Transaction;
}
export interface IorderDetailComponent {
  order: IOrder;
}
