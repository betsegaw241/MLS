import { PharmaciesMenu, adminMenu, superAdminMenu } from "./constants";

export const getMenu = (role?: string | null) => {
  return role === "admin"
    ? adminMenu
    : role === "pharmacist"
    ? PharmaciesMenu
    : role === "superAdmin"
    ? superAdminMenu
    : null;
};
