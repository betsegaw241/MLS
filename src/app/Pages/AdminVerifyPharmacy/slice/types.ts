export interface VerifyPharmaciesPageState {
  errorMessage: string;
  loading: boolean;
  pharmaciesList: IpharmacyData;
}

export interface IpharmacyData {
  data: pharmacy[];
  totalPages: number;
}
export interface pharmacy {
  _id: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  city: string;
  status:string;
  operationalHours: string;
  coverPhoto: string;
  pharmacyLogo: string;
  deliveryWaitingTime: string;
  deliveryTimes: string;
  deliveryArea: string;
  fastDeliveryFee: string;
  deliveryFeeinKm: string;
  isDeliveryAvailable: boolean;
}
