import { selectRole } from "app/Pages/Login/slice/selectors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
// import { AccessControl } from 'accesscontrol';

interface IUseAllowedRole {
  allowedRole: string | string[];
}

export function useAllowedRole(props: IUseAllowedRole) {
  const role = useSelector(selectRole) || localStorage.getItem("role");

  const navigate = useNavigate();
  if (!role || !props.allowedRole.includes(role)) {
    navigate("/login");
  }
}

// export function usePermission(props: IUsePermission) {
//   const role = useSelector(selectRole); // Assuming selectRole retrieves user role from Redux state
//   const navigate = useNavigate();

//   // Check if user has the required permission based on their role
//   const hasPermission = role && permissions[role]?.includes(props.permission);

//   if (!hasPermission) {
//     navigate("/unauthorized"); // Redirect to unauthorized page if permission denied
//   }

//   // Rest of your component logic can access the component here
//   // Assuming the component needs the permission to render something
//   return hasPermission;
// }