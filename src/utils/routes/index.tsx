import LoginPage from "app/Pages/Login";
import Header from "../../app/Components/layouts/Header/header";
import { IRoute } from "./types";
import MapComponent from "app/Components/ui/MapComponent";
import CreateAccountPage from "app/Pages/createAccountPage/index";
import AddPharmacyPage from "app/Pages/AddPharmacyPage/index";
import HomePage from "app/Pages/HomePage";
import ProfilePage from "app/Pages/ProfilePage";

import VerifyEmailComponent from "app/Components/verifyEmail/VerifyEmailComponent";
import VerifyEmailPage from "app/Pages/VerifyEmailPage";
import AdminVerifyPharmacy from "app/Components/AdminVerifyPharmacy";
import ManageInventoryPage from "app/Pages/ManageInventoryPage";
import AddDrugPage from "app/Pages/AddDrugsPage";

import OrderPage from "app/Pages/OrderPage";
import OrderDetailPage from "app/Pages/OrderDetailPage";
import PharmacyAccountPage from "app/Pages/PharmacyAccountPage";
import RegisterDrugPage from "app/Pages/NewDrugRegistrationPage";
import DashBoardPage from "app/Pages/DashboardPage";
import PharmacyStockPage from "app/Pages/StockPage";
import DrugDetailPage from "app/Pages/DrugDetailPage";
import EditDrugDetailsPage from "app/Pages/EditDrugDetailsPages";
import AdminUsersPage from "app/Pages/AdminUsersPage";
import AddAdminPage from "app/Pages/AddAdminPage";
import AdminPharmaciesPage from "app/Pages/AdminPharmaciesPage";
import AdminProfilePage from "app/Pages/AdminProfilePage";
import FeedbacksPage from "app/Pages/FeedbacksPage";

export const routes: IRoute[] = [
  {
    element: <DashBoardPage />,
    exact: true,
    path: "/pharmacist/dashboard/:id",
    isProtected: true,
    allowedRole: "pharmacist",
    needsLayout: true,
  },
  {
    element: <></>,
    exact: true,
    path: "superAdmindashboard",
    isProtected: true,
    allowedRole: "superAdmin",
    needsLayout: true,
  },
  {
    element: <Header />,
    exact: true,
    path: "/",
    isProtected: false,
    allowedRole: "*",
  },
  {
    element: <LoginPage />,
    exact: true,
    path: "/login",
    isProtected: false,
    allowedRole: "*",
  },
  {
    element: <MapComponent />,
    exact: true,
    path: "null/map",
    isProtected: false,
    allowedRole: "*",
  },
  {
    element: <CreateAccountPage />,
    exact: true,
    path: "/signup",
    isProtected: false,
    allowedRole: "*",
  },
  {
    element: <AddPharmacyPage />,
    exact: true,
    path: "/addpharmacy",
    isProtected: false,
    allowedRole: "*",
  },
  {
    element: <AddAdminPage />,
    exact: true,
    path: "/addAdmin",
    needsLayout: true,
    isProtected: true,
    allowedRole: "superAdmin",
  },
  {
    element: <HomePage />,
    exact: true,
    path: "/pharmacist/home",
    isProtected: true,
    allowedRole: "pharmacist",
  },
  {
    element: <HomePage />,
    exact: true,
    path: "/admin/home",
    isProtected: true,
    allowedRole: "pharmacist",
  },
  {
    element: <OrderPage />,
    exact: true,
    path: "pharmacist/request/:id",
    allowedRole: "pharmacist",
    needsLayout: true,
    isProtected: true,
  },
  {
    element: <ProfilePage />,
    exact: true,
    path: "pharmacist/profile",
    isProtected: true,
    allowedRole: "pharmacist",
  },
  {
    element: <ManageInventoryPage />,
    exact: true,
    path: "pharmacist/inventory/:id",
    isProtected: true,
    allowedRole: "pharmacist",
    needsLayout: true,
  },
  {
    element: <PharmacyAccountPage />,
    exact: true,
    path: "pharmacist/account/:id",
    isProtected: true,
    allowedRole: "pharmacist",
    needsLayout: true,
  },
  {
    element: <OrderDetailPage />,
    exact: true,
    path: "pharmacist/orderdetail/:id",
    isProtected: true,
    allowedRole: "pharmacist",
    needsLayout: true,
  },
  {
    element: <VerifyEmailComponent />,
    exact: true,
    path: "/verifyemail",
    isProtected: false,
    allowedRole: "*",
  },
  {
    element: <VerifyEmailPage />,
    exact: true,
    path: "/verifiedemail/activate",
    isProtected: false,
    allowedRole: "*",
  },
  {
    element: <PharmacyStockPage />,
    exact: true,
    path: "pharmacist/stock/:id",
    isProtected: true,
    allowedRole: "pharmacist",
    needsLayout: true,
  },
  {
    element: <DrugDetailPage />,
    exact: true,
    path: "pharmacist/drugdetails/:id",
    isProtected: true,
    allowedRole: "pharmacist",
    needsLayout: true,
  },
  {
    element: <AddDrugPage />,
    exact: true,
    path: "pharmacist/adddrug/:id",
    isProtected: true,
    allowedRole: "pharmacist",
    needsLayout: true,
  },
  {
    element: <RegisterDrugPage />,
    exact: true,
    path: "pharmacist/addnewdrug/:id",
    isProtected: true,
    allowedRole: "pharmacist",
    needsLayout: true,
  },
  {
    element: <AdminVerifyPharmacy />,
    exact: true,
    path: "verifyPharmacy",
    isProtected: true,
    allowedRole: ["admin", "superAdmin"],
    needsLayout: true,
  },
  {
    element: <EditDrugDetailsPage />,
    exact: true,
    path: "pharmacist/drug/edit/:id",
    isProtected: true,
    allowedRole: "pharmacist",
    needsLayout: true,
  },
  {
    element: <AdminUsersPage />,
    exact: true,
    path: "users",
    isProtected: true,
    allowedRole: "superAdmin",
    needsLayout: true,
  },
  {
    element: <AdminPharmaciesPage />,
    exact: true,
    path: "pharmacies",
    isProtected: true,
    allowedRole: "superAdmin",
    needsLayout: true,
  },
  {
    element: <AdminProfilePage />,
    exact: true,
    path: "account",
    isProtected: true,
    allowedRole: "superAdmin",
    needsLayout: true,
  },
  {
    element: <FeedbacksPage />,
    exact: true,
    path: "feedbacks",
    isProtected: true,
    allowedRole: ["superAdmin", "admin"],
    needsLayout: true,
  },
];
