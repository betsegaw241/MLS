import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

interface IUseAllowedRole {
  allowedRole: string | undefined;
}

export function useAllowedRole(props: IUseAllowedRole) {
  const role = localStorage.getItem('role');

  console.log('allwed-role',role)  
  const navigate = useNavigate();

  if (role !== props.allowedRole) {
    navigate('/login');
  }
}

export function usePermission() {}
