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
  id: string;
  label: string;
  minWidth?: number;
  options?: Option[];
}

interface Option {
  label: string;
  value: string;
}
