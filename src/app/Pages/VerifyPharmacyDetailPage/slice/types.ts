import { user } from "app/Pages/AdminUsersPage/slice/types";

export interface VerifyPharmacyDetailPageState {
  errorMessage: string;
  loading: boolean;
  pharmacy: pharmacy;
  verified:boolean;
}
export interface pharmacy {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
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
  pharmacyLicense: string;
  status: string;
  pharmacist: user;
}
