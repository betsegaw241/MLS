export interface IPharmacyAccountComponent {
  pharmacy: Ipharmacy;
  handleUpdate: (pharmacy: Ipharmacy) => void;
  handleUpdateOperations: (pharmacy: Ipharmacy) => void;
  handleUpdateAccountDetail: (pharmacy: Ipharmacy) => void;
  seteditPharmacyOPerationalData: React.Dispatch<React.SetStateAction<boolean>>;
  SetEditPharmacyAccountDetail: React.Dispatch<React.SetStateAction<boolean>>;
  editPharmacyData: boolean;
  editPharmacyOPerationalData: boolean;
  editPharmacyAccountDetail: boolean;
  setEditPharmacyData: React.Dispatch<React.SetStateAction<boolean>>;
  handleUploadCover: (file: File[]) => void;
  handleUploadLogo: (file: File[]) => void;
  banksName: string;
}
export interface Ipharmacy {
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
  avgRating:number;
}

export interface IoperatioData {
  deliveryWaitingTime: string;
  deliveryTimes: string;
  deliveryArea: string;
  fastDeliveryFee: string;
  deliveryFeeinKm: string;
  isDeliveryAvailable: boolean;
}

interface Account {
  accountHolderName: string;
  accountNumber: string;
  bankName: string;
  branchName: string;
  accountType: string;
  bankCode: string;
  id:string;
}
interface Bank {
  data:Account[];
  message:string;
}
