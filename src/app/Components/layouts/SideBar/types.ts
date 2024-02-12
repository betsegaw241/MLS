import { IconType } from "react-icons";

export interface SideBarMenuItemProp {
  key: number;
  menuItem: ISideBarMenu;
  setshowMenu?: (value: boolean) => void;
}
export interface MenuListProp {
  setshowMenu: (value: boolean) => void;
}

export interface ISideBarMenu {
  label: string;
  to: string;
  icon: IconType;
  onClick?: () => void;
}
