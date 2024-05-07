import { IconType } from "react-icons";

export interface ISideBarMenu {
  label: string;
  to: string;
  icon: IconType;
  subMenuItems?: ISideBarMenu[];

  onClick?: () => void;
}

export interface IUseAllowedRole {
  allowedRole: string;
  children: React.ReactNode;
}

export interface IColumn {
  _id: any;
  drug: ReactNode;
  balance: ReactNode;
  expiration_date: ReactNode;
  id: string;
  label: string;
  minWidth?: number;
  options?: Option[];
}

interface Option {
  label: string;
  value: string;
}
