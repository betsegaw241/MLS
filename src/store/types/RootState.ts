import { addDrugPageState } from "app/Pages/AddDrugsPage/slice/types";
import { addPharmacyPageState } from "app/Pages/AddPharmacyPage/slice/types";
import { addAdminPageState } from "app/Pages/AddAdminPage/slice/types";
import { homePageState } from "app/Pages/HomePage/slice/types";
import { LayoutState } from "app/Pages/Layout/slice/types";
import { LoginState } from "app/Pages/Login/slice/types";
import { ManageInventorState } from "app/Pages/ManageInventoryPage/types";
import { orderDetailPageState } from "app/Pages/OrderDetailPage/slices/types";
import { RegisterDrugPageState } from "app/Pages/NewDrugRegistrationPage/types";
import { orderPageState } from "app/Pages/OrderPage/slices/types";
import { pharmacyAccountPageState } from "app/Pages/PharmacyAccountPage/slices/types";
import { editProfilePageState } from "app/Pages/ProfilePage/slice/types";
import { verifyAccountPageState } from "app/Pages/VerifyEmailPage/slice/types";
import { createAccountPageState } from "app/Pages/createAccountPage/slice/types";
import { DashboardPageState } from "app/Pages/DashboardPage/slice/types";
import { PharmacyStockPageState } from "app/Pages/StockPage/slice/types";
import { DrugDetailPageState } from "app/Pages/DrugDetailPage/slice/types";
import { EditDrugDetailsPageState } from "app/Pages/EditDrugDetailsPages/types";
import { AdminUsersPageState } from "app/Pages/AdminUsersPage/slice/types";
import { AdminPharmaciesPageState } from "app/Pages/AdminPharmaciesPage/slice/types";
import { FeedbackPageState } from "app/Pages/FeedbacksPage/slice/types";

export interface RootState {
  Layout?: LayoutState;
  createAccountPage: createAccountPageState;
  editProfile: editProfilePageState;
  orderSlice: orderPageState;
  login: LoginState;
  addPharmacy: addPharmacyPageState;
  addAdmin: addAdminPageState;
  homePage: homePageState;
  verifyAccount: verifyAccountPageState;
  manageInventory: ManageInventorState;
  addDrug: addDrugPageState;
  orderDetailSlice: orderDetailPageState;
  pharmacyAccount: pharmacyAccountPageState;
  registerDrug: RegisterDrugPageState;
  dashboard: DashboardPageState;
  getDrugsList: PharmacyStockPageState;
  drugDetail: DrugDetailPageState;
  editDrugDetail: EditDrugDetailsPageState;
  getUsersList: AdminUsersPageState;
  getPharmaciesList: AdminPharmaciesPageState;
  feedbacks:FeedbackPageState;
}
