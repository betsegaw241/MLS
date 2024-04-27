export interface IPharmacy {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  phoneline2?: string;
  address: string;
  workingHours: string;
  cover?: string;
  logo?: string;

  minDeliveryTime: number;
  maxDeliveryTime: number;
  deliveryCoverage: string;
  hasDeliveryService: boolean;
  socialMedia: {
    facebook: string;
    telegram: string;
    linkedIn: string;
  };
  account: Account;
  deliveryWaitingTime: string;
  deliveryPricePerKm: number;
  about: string;
  phone: string;
  adress: string;
  operationalHours: string;
  coverPhoto: string;
  pharmacyLogo: string;
  minWaitingTime: number;
  maxWaitingTime: number;
  minWaitingTimeUnit: string;
  maxWaitingTimeUnit: string;
  deliveryArea: string;
  fastDeliveryFee: string;
  deliveryFeeinKm: string;
  isDeliveryAvailable: boolean;
  banks: Bank;
  bankName: string;
  accountHolderName: string;
  accountNumber: string;
}
export interface pharmacyInformation {
  _id: string;
  name: string;
  email: string;
  phone: string;
  adress: string;
  operationalHours: string;
  coverPhoto: string;
  pharmacyLogo: string;
}
export interface delivetData {
  minWaitingTime: number | undefined;
  maxWaitingTime: number | undefined;
  minWaitingTimeUnit: string;
  maxWaitingTimeUnit: string;
  deliveryTimes: string;
  isDeliveryAvailable: boolean;
  deliveryFeeinKm: string;
  deliveryArea: number;
}
interface Account {
  accountHolderName: string;
  accountNumber: string;
  bankName: string;
  branchName: string;
  accountType: string;
  bankCode: string;
  id: string;
}
interface Bank {
  data: Account[];
  message: string;
}

export interface IbankName {
  value: string;
  label: string;
}
