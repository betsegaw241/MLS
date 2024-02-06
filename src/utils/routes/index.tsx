import LoginPage from 'app/Pages/Login';
import Header from '../../app/Components/layouts/Header/header';
import { IRoute } from './types';

export const routes: IRoute[] = [
  

  {
    element: <Header />,
    exact: true,
    path: '/',
    isProtected: false,
    allowedRole: '*',
  }, {
    element: <LoginPage />,
    exact: true,
    path: '/login',
    isProtected: false,
    allowedRole: '*',
  },
];
