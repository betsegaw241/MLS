import LoginPage from "app/Pages/Login";
import Header from "../../app/Components/layouts/Header/header";
import { IRoute } from "./types";
import CreateAccountPage from "app/Pages/createAccountPage/index";
import AddPharmacyPage from "app/Pages/AddPharmacyPage/index";
import HomePage from "app/Pages/HomePage";
import ProfilePage from "app/Pages/ProfilePage";
import VerifyEmailPage from "app/Pages/VerifyEmailPage";
import AdminVerifyPharmacy from "app/Pages/AdminVerifyPharmacy";
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
import NotificationPage from "app/Pages/Notification";
import TransactionPage from "app/Pages/TransactionPage";
import FeedbacksPage from "app/Pages/FeedbacksPage";
import TransactionDetailPage from "app/Pages/TransactionDetailPage";
import FeedbackDetailPage from "app/Pages/FeedbackDetail";
import VerifyPharmacyDetailPage from "app/Pages/VerifyPharmacyDetailPage";
import ReviewsPgae from "app/Pages/ReviewsPgae";
import LandingComponent from "app/Components/LandingComponent";
import RegisterSellPage from "app/Pages/RegisterSellPage";
import CreateAdminPasswordPage from "app/Pages/CreateAdminPswrdPage";
import AdminDashboardPage from "app/Pages/AdminDashboardPage";
import ChangePasswordPage from "app/Pages/ChangePassword";

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
    element: <AdminDashboardPage />,
    exact: true,
    path: "dashboard",
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
    path: "/loginPage",
    isProtected: false,
    allowedRole: "*",
  },
  {
    element: <ChangePasswordPage />,
    exact: true,
    path: "/changePassword",
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
    allowedRole: "pharmacist",
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
    element: <VerifyEmailPage />,
    exact: true,
    path: "/verifyemail",
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
    allowedRole: ["superAdmin", "admin"],
    needsLayout: true,
  },
  {
    element: <NotificationPage />,
    exact: true,
    path: "pharmacist/notification",
    isProtected: true,
    allowedRole: "*",
  },
  {
    element: <TransactionPage />,
    exact: true,
    path: "transactions",
    isProtected: true,
    needsLayout: true,
    allowedRole: "superAdmin",
  },
  {
    element: <TransactionDetailPage />,
    exact: true,
    path: "superadmin/transactiondetail/:id",
    isProtected: true,
    needsLayout: true,
    allowedRole: "superAdmin",
  },
  {
    element: <FeedbacksPage />,
    exact: true,
    path: "feedbacks",
    isProtected: true,
    allowedRole: ["superAdmin", "admin"],
    needsLayout: true,
  },
  {
    element: <FeedbackDetailPage />,
    exact: true,
    path: "feedbackdetail/:id",
    isProtected: true,
    allowedRole: "superAdmin",
    needsLayout: true,
  },
  {
    element: <VerifyPharmacyDetailPage />,
    exact: true,
    path: "verifyPharmacy/:id",
    isProtected: true,
    allowedRole: ["superAdmin", "admin"],
    needsLayout: true,
  },
  {
    element: <></>,
    exact: true,
    path: "admin/home",
    isProtected: true,
    allowedRole: "admin",
    needsLayout: true,
  },
  {
    element: <ReviewsPgae />,
    exact: true,
    path: "pharmacy/reviews/:id",
    isProtected: true,
    allowedRole: "pharmacist",
    needsLayout: true,
  },
  {
    element: <LandingComponent />,
    exact: true,
    path: "/landingPage",
    isProtected: false,
    allowedRole: "*",
  },
  {
    element: <RegisterSellPage />,
    exact: true,
    path: "/pharmacist/registersell/:id",
    isProtected: true,
    allowedRole: "pharmacist",
    needsLayout: true,
  },
  {
    element: <CreateAdminPasswordPage />,
    exact: true,
    path: "/change-password",
    isProtected: false,
    allowedRole: "*",
  },
];
