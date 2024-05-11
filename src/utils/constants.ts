import { IColumn, ISideBarMenu } from "./types";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineFeedback } from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { PiUsersThin } from "react-icons/pi";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import { CiUser } from "react-icons/ci";

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
export const superAdminMenu: ISideBarMenu[] = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: RxDashboard,
  },
  {
    label: "users",
    to: "/users",
    icon: PiUsersThin,
    subMenuItems: [
      {
        label: "Add Admin",
        to: "/addAdmin",
        icon: IoIosAdd,
      },
    ],
  },
  {
    label: "Pharmacies",
    to: "/pharmacies",
    icon: MdOutlineLocalPharmacy,
  },
  {
    label: "Feedback",
    to: "/feedbacks",
    icon: MdOutlineFeedback,
  },
  {
    label: "Transactions",
    to: "/transactions",
    icon: AiOutlineTransaction,
  },

  {
    label: "Account",
    to: "/account",
    icon: CiUser,
  },
];

export const adminMenu: ISideBarMenu[] = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: RxDashboard,
  },
  {
    label: "Pharmacies",
    to: "/verifyPharmacy",
    icon: MdOutlineLocalPharmacy,
  },
  {
    label: "Account",
    to: "/account",
    icon: CiUser,
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
        label: "Stock",
        to: "/stock",
        icon: RxDashboard,
      },
      {
        label: "Add drugs",
        to: "/adddrug",
        icon: IoIosAdd,
      },
      {
        label: "Sell",
        to: "/registersell",
        icon: IoIosAdd,
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
    icon: CiUser,
  },
];

export const OrderTableColumns: IColumn[] = [
  {
    id: "name",
    label: "Name",
    minWidth: 150,
  },

  {
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
    options: [
      { label: "Pending", value: "pending" },
      { label: "InProgress", value: "inprogress" },
      { label: "Rejected", value: "rejected" },
      { label: "Deliverd", value: "delivered" },
      { label: "Refunded", value: "refunded" },
      { label: "Expired", value: "expired" },
    ],
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
    id: "Stock Leve",
    label: "Stock Leve",
    minWidth: 50,
  },
];
export const drugBatch: IColumn[] = [
  {
    id: "Batch",
    label: "Batch Number",
    minWidth: 50,
  },
  {
    id: "Quantity",
    label: "Quantity",
    minWidth: 50,
  },
  {
    id: "Recived From",
    label: "Recived From",
    minWidth: 50,
  },
  {
    id: "Expairation Date",
    label: "Expairation Date",
    minWidth: 50,
  },
  {
    id: "Price",
    label: "Price",
    minWidth: 50,
  },
  {
    id: "Cost",
    label: "Cost",
    minWidth: 50,
  },
  {
    id: "Date",
    label: "Recived   Date",
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
    id: "Catagory",
    label: "Catagory",
    minWidth: 50,
  },
  {
    id: "stock level",
    label: "Stock Level",
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
    id: "category",
    label: "Category",
    minWidth: 50,
  },

  {
    id: "stockLevel",
    label: "Stock Level",
    minWidth: 50,
  },
];
export const SoonExpiring: IColumn[] = [
  {
    id: "Category ",
    label: "Category",
    minWidth: 50,
  },
  {
    id: "Drug",
    label: "Drug",
    minWidth: 50,
  },
  {
    id: "Created At",
    label: "Created At",
    minWidth: 50,
  },
  {
    id: "Status",
    label: "Status",
    minWidth: 50,
  },
];

export const OutOFStock: IColumn[] = [
  {
    id: "NO",
    label: "NO",
    minWidth: 10,
  },
  {
    id: "Drug",
    label: "Drug",
    minWidth: 50,
  },
];

export const UsersList: IColumn[] = [
  {
    id: "NO",
    label: "No",
    minWidth: 10,
  },
  {
    id: "Name",
    label: "Name",
    minWidth: 50,
  },
  {
    id: "Email",
    label: "Email",
    minWidth: 50,
  },
  {
    id: "Phone Number",
    label: "Phone Number",
    minWidth: 50,
  },
  {
    id: "Role",
    label: "Role",
    minWidth: 50,
    options: [
      { label: "Admin", value: "admin" },
      { label: "Pharmacist", value: "pharmacist" },
      { label: "Coustomer", value: "customer" },
    ],
  },
];
export const pharmaciesList: IColumn[] = [
  {
    id: "Name",
    label: "Name",
    minWidth: 50,
  },
  {
    id: "Email",
    label: "Email",
    minWidth: 50,
  },
  {
    id: "Phone",
    label: "Phone",
    minWidth: 50,
  },
  {
    id: "Status",
    label: "Status",
    minWidth: 50,
    options: [
      { label: "Approved", value: "approved" },
      { label: "Rejected", value: "rejected" },
      { label: "Pending", value: "pending" },
      { label: "Deactivated", value: "deactivated" },
      { label: "Unassigned", value: "unassigned" },
    ],
  },
];

export const VerifypharmaciesList: IColumn[] = [
  {
    id: "Name",
    label: "Name",
    minWidth: 50,
  },
  {
    id: "Email",
    label: "Email",
    minWidth: 50,
  },
  {
    id: "Phone",
    label: "Phone",
    minWidth: 50,
  },
  {
    id: "Status",
    label: "Status",
    minWidth: 50,
  },
];
export const TransactionTableColumns: IColumn[] = [
  {
    id: "sender",
    label: "Sender",
    minWidth: 120,
  },

  {
    id: "receiver",
    label: "Receiver",
    minWidth: 100,
  },
  {
    id: "senderAccount",
    label: "Sender Account",
    minWidth: 100,
  },
  {
    id: "receiverAccount",
    label: "Receiver Account",
    minWidth: 100,
  },
  {
    id: "reason",
    label: "Reason",
    minWidth: 100,
  },
  {
    id: "createdAt",
    label: "Created At",
    minWidth: 100,
  },
];
export const LoginDesplayText = [
  "Effortlessly manage your pharmacy with ease.",
  "Facilitates tracking of drug stock levels and enables tracking of expiration dates for inventory management",
  "Enables tracking of purchases, sales, losses, and profits.",
  "Enables you to efficiently manage and facilitate order deliveries.",
  "Seamless and accessible payment integration",
];

export const feedbackList: IColumn[] = [
  {
    id: "Feedback",
    label: "Feedback",
    minWidth: 50,
    options: [
      { label: "Complaint", value: "complaint" },
      { label: "Suggestion", value: "suggestion" },
      { label: "Question", value: "question" },
    ],
  },
];
