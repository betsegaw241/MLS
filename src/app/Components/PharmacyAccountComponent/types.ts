export interface Ipharmacy {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  phoneline2?: string;
  state: string;
  city: string;
  operationalHours: string;
  coverPhoto?: string;
  pharmacyLogo?: string;
  deliveryWaitingTime: string;
  deliveryTimes: string;
  deliveryArea: string;
  fastDeliveryFee: string;
  deliveryFeeinKm: string;
  isDeliveryAvailable: boolean;
  socialMedia: {
    facebook: string;
    telegram: string;
    linkedin: string;
  };
}

export interface IPharmacyAccountComponent {
  pharmacy: Ipharmacy;
  handleUpdate: (pharmacy: Ipharmacy) => void;
  handleUpdateOperations: (pharmacy: Ipharmacy) => void;
  seteditPharmacyOPerationalData: React.Dispatch<React.SetStateAction<boolean>>;
  editPharmacyData: boolean;
  editPharmacyOPerationalData: boolean;
  setEditPharmacyData: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IoperatioData {
  deliveryWaitingTime: string;
  deliveryTimes: string;
  deliveryArea: string;
  fastDeliveryFee: string;
  deliveryFeeinKm: string;
  isDeliveryAvailable: boolean;
}
