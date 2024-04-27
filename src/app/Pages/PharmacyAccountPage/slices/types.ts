import { IPharmacy } from "../types";

export interface pharmacyAccountPageState {
  isLoading: boolean;
  isUpdating: boolean;
  pharmacy: IPharmacy;
  link: string;
  isUpdated:boolean;
  banks:IbankData;
}


export interface IbankData{
  data:Account[];

}
interface Account {
  accountHolderName: string;
  accountNumber: string;
  bankName: string;
  branchName: string;
  accountType: string;
  bankCode: string;
  name:string;
  id:string;
}
