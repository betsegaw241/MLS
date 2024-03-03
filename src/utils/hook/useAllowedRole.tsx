import { selectRole } from 'app/Pages/Login/slice/selectors';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
// import { AccessControl } from 'accesscontrol';

interface IUseAllowedRole {
  allowedRole: string | undefined;
}

export function useAllowedRole(props: IUseAllowedRole) {
  // const role = useSelector(selectRole);
  const role = localStorage.getItem('role');

  const navigate = useNavigate();

  if (role !== props.allowedRole) {
    navigate("/login");
  }
}

export function usePermission() {}
