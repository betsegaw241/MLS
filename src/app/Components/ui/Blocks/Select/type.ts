import { RoleType } from '../../AdminCreateRolesComponent/types';

export type SelectProps = {
  handleChange?: () => void;
  name: string;
  type: string;
  lable: string;
  options: RoleType[];
  value: string ;
  onChange?: (e: any) => void;
};
