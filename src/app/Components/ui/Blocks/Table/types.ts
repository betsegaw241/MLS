import { TableCellProps } from '@mui/material';
import { IColumn } from 'utils/types';

export interface StyledTableCellProps extends TableCellProps {
    backgroundColor?: string;
  }
  export interface TableHeadProp  {
    columnName: IColumn[];
  }
//   backgroundColor={mode=='dark'?theme.colors.dark.black[15]:theme.colors.light.black[15]} 