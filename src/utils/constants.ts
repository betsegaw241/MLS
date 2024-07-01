import { IColumn, ISideBarMenu, Itestimonials } from "./types";
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
    id: "Current Quantity",
    label: "currentQuantity",
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
    id: "Drug",
    label: "Drug",
    minWidth: 50,
  },

  {
    id: "batch number",
    label: "Batch Number",
    minWidth: 50,
  },
  {
    id: "expaired date",
    label: "Expaired Date",
    minWidth: 50,
  },
  {
    id: "quantity",
    label: "Quantity",
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
  {
    id: "action",
    label: "Actions",
    minWidth: 50,
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
  // {
  //   id: "Phone",
  //   label: "Phone",
  //   minWidth: 50,
  // },
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

export const testimonials: Itestimonials[] = [
  {
    id: "1",
    name: "John Doe",
    job: "Satisfied Customer",
    avatar:
      "https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg?t=st=1715585071~exp=1715588671~hmac=0e285643f0ff441eb012b6ee5ba6665c72a159898ed190fd9325ad6bd33afa9c&w=740",
    content:
      "Running around to different pharmacies used to be a huge hassle, especially when I wasn t feeling well. The Medicine Locator System has been a lifesaver! Now, I can simply search for my medication from my phone and see exactly which pharmacies have it in stock. No more wasted trips or unnecessary stress. Plus, being able to compare prices beforehand helps me save money too. This app is a must-have for anyone who needs to get their prescriptions filled!pen_spark",
  },
  {
    id: "2",
    name: "Dr. Seble Yonas",
    job: "Medical Practitioner",
    avatar:
      "https://img.freepik.com/free-photo/front-view-doctor-wearing-stethoscope_23-2149856261.jpg?size=626&ext=jpg&ga=GA1.1.2064405410.1710828823&semt=ais_user",
    content:
      "In my practice, I've seen countless patients struggle with the tedious process of finding essential medications. The Medicine Locator System is a game-changer. My patients can now easily locate nearby pharmacies with the medicines they need, saving them valuable time and frustration. The system also empowers them to compare prices and make informed decisions. I highly recommend this platform to anyone seeking a more efficient and convenient way to obtain medications.",
  },
  {
    id: "3",
    name: "Danel Henok",
    job: "Satisfied Customer",
    avatar:
      "https://img.freepik.com/premium-photo/portrait-handsome-smiling-african-american-young-man-black-background_8119-2235.jpg?w=740",
    content:
      "As a working mom, finding time for myself is a constant struggle. The Medicine Locator System has been a huge help in managing my family s health needs. It allows me to quickly search for medications on the go, whether I m at work or picking up the kids. Plus, the ability to order for delivery is a game-changer! No more dragging a sick child out to the pharmacy. This system is a lifesaver for busy families like mine. I can t recommend it enough!pen_spark",
  },
];
