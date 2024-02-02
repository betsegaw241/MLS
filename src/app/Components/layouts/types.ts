import { IUserModel } from 'app/models/user';
import { IconType } from 'react-icons';
export interface LayoutsComponentProps {
  children?: React.ReactNode;
  user?: IUserModel;
  role?: string | null;
  allowedRole?: string;
}
export interface HeaderComponentProps {
  mode: string;
}

export interface ISideBarMenu {
  label: string;
  to: string;
  icon: IconType;
  onClick?: () => void;
}
export interface SideBarMenuProp {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface SideBarMenuItemProp {
  key: number;
  menuItem: ISideBarMenu;
  setshowMenu?: (value: boolean) => void;
  isCollapsed?: boolean;
  setIsCollapsed?: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface MenuListProp {
  setshowMenu: (value: boolean) => void;
}
