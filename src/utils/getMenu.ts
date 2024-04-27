import { PharmaciesMenu, adminMenu } from "./constants";

export const getMenu = (role?: string | null) => {
  return role === "admin" || role === "superAdmin"
    ? adminMenu
    : role === "pharmacist"
    ? PharmaciesMenu
    : null;
}