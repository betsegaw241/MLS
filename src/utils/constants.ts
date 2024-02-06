import { ISideBarMenu } from "./types";
import { RxDashboard } from "react-icons/rx";
import { FaUserSecret } from "react-icons/fa";
import { AiOutlineBank } from "react-icons/ai";

import { VscRequestChanges } from "react-icons/vsc";

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
    label: "users",
    to: "/users",
    icon: AiOutlineBank,
  },
  {
    label: "Account",
    to: "/account",
    icon: VscRequestChanges,
  },
];
export const PharmaciesMenu = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: RxDashboard,
  },

  {
    label: "order",
    to: "/requests",
    icon: VscRequestChanges,
  },
];
