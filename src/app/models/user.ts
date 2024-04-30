import { ITimeStamp } from "./shared";

export interface IUserModel extends ITimeStamp {
  data: data;
  status: number;
}
export interface data {
  name?: string;
  email: string;
  isFirstTime: boolean;
  role: string;
  accessToken?: string;
  _id: string;
  avatar: string;
}

export interface IUser {
  name?: string;
  email: string;
  isFirstTime: boolean;
  role: string;
  accessToken?: string;
  _id: string;
  avatar: string;
  status: string;
  emailVerified: boolean;
}
