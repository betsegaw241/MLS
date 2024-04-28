export interface orderDetailPageState {
  isgettingOrder: boolean;
  isOrderExist: boolean;
  order: IOrder[];
  isUpdating: boolean;
}


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

export interface PayloadType {
  id: string;
  order: IOrder[];
}

export interface IOrder {
  _id: string;
  deliveryAddress: DeliveryAddress;
  status: string;
  drugId: string;
  quantity: number;
  deliveryDate: string; 
  transactionId: string;
  orderedAt: string; 
  customer: Customer;
  pharmacy: Pharmacy;
  drugs: Drug[];
  transaction: Transaction;
}

interface Drug {
  drugId: string;
  stockId: string;
  quantity?: number;
  price?: number;
  drugName?: string;
  expiredDate: string;
}