import { PharmaciesMenu, adminMenu } from './constants';

export const getMenu = (role?: string | null) => {
  return role === 'admin'
    ? adminMenu
    : role === 'admin'
    ? PharmaciesMenu
    : role === 'pharmcy'
    
};
