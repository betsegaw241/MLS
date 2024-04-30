export interface VerifyPharmacyDetailPageState {
  errorMessage: string;
  loading: boolean;
  pharmacy: pharmacy;
}
export interface pharmacy {
  _id: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  city: string;
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
