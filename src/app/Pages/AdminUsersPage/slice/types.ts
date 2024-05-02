export interface AdminUsersPageState {
  errorMessage: string;
  loading: boolean;
  usersList: IuserData;
}

export interface IuserData {
  data: user[];
  totalPages: number;
}
export interface user {
  _id: string;
  name: string;
  phoneNumber: string;
  password: string;
  email: string;
  address: string;
  avatar: string;
  coverPhoto: string;
  location: Adress;
  account: Account[];
  deliveryAddress: Adress[];
  pharmacistLicense: string;
  emailVerified: boolean;
  role: string;
}

export interface Adress {
  address: string;
  phoneNumber: string;
  location: Location;
}

interface Location {
  type: "Point";
  coordinates: number[];
}
interface Account {
  accountHolderName: string;
  accountNumber: string;
  bankName: string;
  branchName: string;
  accountType: string;
}
