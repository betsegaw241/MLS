import { Pharmacy } from "app/Pages/OrderDetailPage/slices/types";
import { Ipharmacy } from "../PharmacyAccountComponent/types";

export interface IorderDetailComponent {
  order: IOrder;
  onRejectClick: () => void;
  onAcceptClick: () => void;
  pharmacy: Ipharmacy;
  isUpdating: boolean;
}
export interface IOrder {
  _id: string;
  deliveryAddress: DeliveryAddress;
  hasDelivery: boolean;
  status: string;
  drugs: Drug[];
  quantity: number;
  totalAmount: number;
  profit: number;
  totalCost: number;
  deliveryDistance: number;
  deliveryFee: number;
  deliveryExpireDate: string;
  deliveryPricePerKm: number;
  customer: Customer;

}

interface DeliveryAddress {
  location: {
    coordinates: [number, number];
    type: string;
  };
  address: string;
  phoneNumber: string;
}

export interface Customer {
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

interface Drug {
  quantity: number;
  _id: string;
  drugId: string;
  stockId: string;
  price: number;
  drugName: string;
}
