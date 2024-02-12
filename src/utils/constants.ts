import { ISideBarMenu } from "./types";
import { RxDashboard } from "react-icons/rx";
import { FaUserSecret } from "react-icons/fa";
import { AiOutlineBank } from "react-icons/ai";
import { MdOutlineFeedback } from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdOutlineAccountBalance } from "react-icons/md";

export const API_ROUTE = import.meta.env.VITE_API_ROUTE;

export const routeConstants = {
  home: "/",
  login: "/login",
  signup: "/sign-up",
};

export const cookieKeys = {
  authToken: 'au-few92',
};
export const adminMenu: ISideBarMenu[] = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: RxDashboard,
  },
  {
    label: "Pharmacies",
    to: "/Pharmacies",
    icon: FaUserSecret,
  },
  {
    label: "Feedback",
    to: "/feedbacks",
    icon: MdOutlineFeedback,
  },
  {
    label: "users",
    to: "/users",
    icon: AiOutlineBank,
  },
  {
    label: "Account",
    to: "/account",
    icon: VscRequestChanges,
  },
  {
    label: "Transactions",
    to: "/transactions",
    icon: AiOutlineTransaction,
  },
];
export const PharmaciesMenu = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: RxDashboard,
  },

  {
    label: "Inventory",
    to: "/inventory",
    icon: MdOutlineInventory2,
  },
  {
    label: "order",
    to: "/requests",
    icon: VscRequestChanges,
  },
  {
    label: "pharmacy account",
    to: "/pharmAccount",
    icon: MdOutlineAccountBalance,
  },
];


