import { IColumn, ISideBarMenu } from "./types";
import { RxDashboard } from "react-icons/rx";
import { FaUserSecret } from "react-icons/fa";
import { AiOutlineBank } from "react-icons/ai";
import { MdOutlineFeedback } from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdOutlineAccountBalance } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";

//import DataTable from "app/Components/layouts/Main";

export const API_ROUTE = import.meta.env.VITE_API_ROUTE;

export const routeConstants = {
  home: "/",
  login: "/login",
  signup: "/sign-up",
  profile: "/profile",
};

export const cookieKeys = {
  authToken: "au-few92",
};
export const adminMenu: ISideBarMenu[] = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: RxDashboard,
  },
  {
    label: "Pharmacies",
    to: "/map",
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
    subMenuItems: [
      {
        label: "Add drugs",
        to: "/adddrug",
        icon: IoIosAdd,
      },
      {
        label: "Stock",
        to: "/stock",
        icon: RxDashboard,
      },
    ],
  },
  {
    label: "Orders",
    to: "/request",
    icon: VscRequestChanges,
  },
  {
    label: "Account",
    to: "/account",
    icon: MdOutlineAccountBalance,
  },
];

export const OrderTableColumns: IColumn[] = [
 
  {
    id: "name",
    label: "Name",
    minWidth: 150,
  },
 
  {
    id: "Drug",
    label: "Drug",
    minWidth: 100,
  }, {
    id: "Email",
    label: "Email",
    minWidth: 100,
  },
  {
    id: "Location",
    label: "Location",
    minWidth: 100,
  },
  {
    id: "Time",
    label: "Time",
    minWidth: 100,
  },
  {
    id: "Order Stutus",
    label: "Order Stutus",
    minWidth: 100,
  },
];
export const drugTableColumn: IColumn[] = [
  {
    id: "NO",
    label: "NO",
    minWidth: 10,
  },
  {
    id: "Drug",
    label: "Drug",
    minWidth: 100,
  },
  {
    id: "Catagory",
    label: "Catagory",
    minWidth: 50,
  },
  {
    id: "Unit Price",
    label: "Unit Price",
    minWidth: 50,
  },
 
  {
    id: "Stock Leve",
    label: "Stock Leve",
    minWidth: 50,
  },
  {
    id: "Minimum Stock Level",
    label: "Minimum Stock Level",
    minWidth: 50,
  },
];
export const drugDetails: IColumn[] = [
  {
    id: "Date",
    label: "Date",
    minWidth: 50,
  },

  {
    id: "Recived",
    label: "Recived",
    minWidth: 50,
  },
  {
    id: "Expairation Date",
    label: "Expairation Date",
    minWidth: 50,
  },
  {
    id: "Balance",
    label: "Balance",
    minWidth: 50,
  },
];

export const RecentlyAdded: IColumn[] = [
  {
    id: "Date",
    label: "Date",
    minWidth: 50,
  },

  {
    id: "Drug",
    label: "Drug",
    minWidth: 50,
  },
  {
    id: "Expairation Date",
    label: "Expairation Date",
    minWidth: 50,
  },
  {
    id: "Added_quantity",
    label: "Added Quantity",
    minWidth: 50,
  },
  {
    id: "Balance",
    label: "Balance",
    minWidth: 50,
  },
];

export const LowStockAlertColumn: IColumn[] = [
  {
    id: "Drug",
    label: "Drug",
    minWidth: 50,
  },
  {
    id: "Expairation Date",
    label: "Expairation Date",
    minWidth: 50,
  },

  {
    id: "Balance",
    label: "Balance",
    minWidth: 50,
  },
];
export const SoonExpiring: IColumn[] = [
  {
    id: "Batch Number ",
    label: "Batch Number",
    minWidth: 50,
  },
  {
    id: "Drug",
    label: "Drug",
    minWidth: 50,
  },
  {
    id: "Balance",
    label: "Balance",
    minWidth: 50,
  },
  {
    id: "Expairation Date",
    label: "Expairation Date",
    minWidth: 50,
  },
];

export const OutOFStock: IColumn[] = [
  {
    id: "NO",
    label: "NO",
    minWidth: 10,
  }, {
    id: "Drug",
    label: "Drug",
    minWidth: 50,
  }
];
