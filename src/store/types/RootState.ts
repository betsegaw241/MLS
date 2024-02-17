import { addPharmacyPageState } from "app/Pages/AddPharmacyPage/slice/types";
import { homePageState } from "app/Pages/HomePage/slice/types";
import { LayoutState } from "app/Pages/Layout/slice/types";
import { editProfilePageState } from "app/Pages/ProfilePage/slice/types";
import { createAccountPageState } from "app/Pages/createAccountPage/slice/types";

export interface RootState {
  Layout?: LayoutState;
  createAccountPage: createAccountPageState;
  editProfilePage: editProfilePageState;
  addPharmacy: addPharmacyPageState;
  homePage: homePageState;
}
