import { IOrder, Pharmacy } from "app/Pages/OrderDetailPage/slices/types";
import { IPharmacy } from "app/Pages/PharmacyAccountPage/types";


export interface IorderDetailComponent {
  order: IOrder;
  onRejectClick: () => void;
  onAcceptClick: () => void;
  pharmacy: IPharmacy;
  isUpdating: boolean;
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

