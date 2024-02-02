import { selectRole } from 'app/layouts/DefaultLayout/slice/selectors';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
// import { AccessControl } from 'accesscontrol';

interface IUseAllowedRole {
  allowedRole: string | undefined;
}

export function useAllowedRole(props: IUseAllowedRole) {
  const role = useSelector(selectRole);
  const navigate = useNavigate();

  if (role !== props.allowedRole) {
    navigate('/login');
  }
}

export function usePermission() {}
// {"Admin": {User: {resource: 'user', action: 'create:any'}}}
