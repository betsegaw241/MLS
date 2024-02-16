import { addPharmacyPageState } from "app/Pages/AddPharmacyPage/slice/types";
import { LayoutState } from "app/Pages/Layout/slice/types";
import { createAccountPageState } from "app/Pages/createAccountPage/slice/types";

export interface RootState {
  Layout?: LayoutState;
  createAccountPage:createAccountPageState;
  addPharmacy:addPharmacyPageState;
}
