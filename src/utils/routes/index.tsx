import LoginPage from "app/Pages/Login";
import Header from "../../app/Components/layouts/Header/header";
import { IRoute } from "./types";
import MapComponent from "app/Components/ui/MapComponent";
import CreateAccountPage from "app/Pages/createAccountPage/index";
import AddPharmacyPage from "app/Pages/AddPharmacyPage/index";
import HomePage from "app/Pages/HomePage";
import ProfilePage from "app/Pages/ProfilePage";
import OrderComponent from "app/Components/OrderComponent";
import ManageInventory from "app/Components/ManageInventory";
import ManagePharmacyAccount from "app/Components/ManagePharmacyAccount";
import OrderDetailComponent from "app/Components/OrdersDetailComponent";
import VerifyEmailComponent from "app/Components/verifyEmail/VerifyEmailComponent";
import VerifyEmailPage from "app/Pages/VerifyEmailPage";
import StockComponent from "app/Components/StockComponent";
import DrugDetailsComponent from "app/Components/DrugDetailsComponent";

export const routes: IRoute[] = [
  {
    element: <></>,
    exact: true,
    path: "/pharmacist/dashboard",
    isProtected: true,
    allowedRole: "pharmacist",
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
    element: <HomePage />,
    exact: true,
    path: "/pharmacist/home",
    isProtected: true,
    allowedRole: "pharmacist",
  },
  {
    element: <OrderComponent />,
    exact: true,
    path: "pharmacist/request",
    allowedRole: "pharmacist",
    needsLayout: true,
    isProtected: true,
  },
  {
    element: <ProfilePage />,
    exact: true,
    path: "/profile",
    isProtected: true,
    allowedRole: "*",
  },
  {
    element: <ManageInventory />,
    exact: true,
    path: "pharmacist/inventory",
    isProtected: true,
    allowedRole: "pharmacist",
    needsLayout: true,
  },
  {
    element: <ManagePharmacyAccount />,
    exact: true,
    path: "pharmacist/account",
    isProtected: true,
    allowedRole: "pharmacist",
    needsLayout: true,
  },
  {
    element: <OrderDetailComponent />,
    exact: true,
    path: "pharmacist/orderdetail",
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
    element: <StockComponent />,
    exact: true,
    path: "pharmacist/stock",
    isProtected: true,
    allowedRole: "pharmacist",
    needsLayout: true,
  }, {
    element: <DrugDetailsComponent />,
    exact: true,
    path: "pharmacist/drugdetails",
    isProtected: true,
    allowedRole: "pharmacist",
    needsLayout: true,
  },
];
