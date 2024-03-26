import { addDrugPageState } from "app/Pages/AddDrugsPage/slice/types";
import { addPharmacyPageState } from "app/Pages/AddPharmacyPage/slice/types";
import { homePageState } from "app/Pages/HomePage/slice/types";
import { LayoutState } from "app/Pages/Layout/slice/types";
import { LoginState } from "app/Pages/Login/slice/types";
import { ManageInventorState } from "app/Pages/ManageInventoryPage/types";
import { orderPageState } from "app/Pages/OrderPage/slices/types";
import { pharmacyAccountPageState } from "app/Pages/PharmacyAccountPage/slices/types";
import { editProfilePageState } from "app/Pages/ProfilePage/slice/types";
import { verifyAccountPageState } from "app/Pages/VerifyEmailPage/slice/types";
import { createAccountPageState } from "app/Pages/createAccountPage/slice/types";

export interface RootState {
  Layout?: LayoutState;
  createAccountPage: createAccountPageState;
  editProfile: editProfilePageState;
  orderSlice: orderPageState;
  login: LoginState;
  addPharmacy: addPharmacyPageState;
  homePage: homePageState;
  verifyAccount: verifyAccountPageState;
  manageInventory: ManageInventorState;
  addDrug: addDrugPageState;
  pharmacyAccount:pharmacyAccountPageState
}
