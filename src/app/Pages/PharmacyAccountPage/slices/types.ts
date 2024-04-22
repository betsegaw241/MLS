export interface pharmacyAccountPageState {
  isLoading: boolean;
  isUpdating: boolean;
  pharmacy: IPharmacy;
}

export interface IPharmacy {
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
