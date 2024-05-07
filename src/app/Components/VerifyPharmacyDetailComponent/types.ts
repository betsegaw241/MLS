import { pharmacy } from "app/Pages/VerifyPharmacyDetailPage/slice/types";

export interface VerifyPharmacyDetailComponentProps {
  pharmacy: pharmacy;
  loading: boolean;
  handleVerify: (value: string) => void;
  // handleVerify:() => void;
}
