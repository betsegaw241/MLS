import { selectRole } from 'app/Pages/Login/slice/selectors';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
// import { AccessControl } from 'accesscontrol';

interface IUseAllowedRole {
  allowedRole: string ;
}

export function useAllowedRole(props: IUseAllowedRole) {
  // const role = useSelector(selectRole);
  const role = localStorage.getItem('role');

  const navigate = useNavigate();
console.log(role,props.allowedRole,"yay")
  if (!role || !props.allowedRole.includes(role)) {
    navigate("/login");
  }
}

export function usePermission() {}
