import LoginPage from 'app/Pages/Login';
import Header from '../../app/Components/layouts/Header/header';
import { IRoute } from './types';
import OrderComponent from 'app/Components/layouts/OrderComponent';
import ProfilePage from 'app/Pages/ProfilePage';

export const routes: IRoute[] = [
  {
    element: <Header />,
    exact: true,
    path: "/",
    isProtected: false,
    allowedRole: "*",
  },
  {
    element: <LoginPage />,
    exact: true,
    path: "/login",
    isProtected: false,
    allowedRole: "*",
  },
  {
    element: <OrderComponent />,
    exact: true,
    path: "null/request",
    isProtected: true,
    allowedRole: "*",
  },
  {
    element: <ProfilePage />,
    exact: true,
    path: "/profile",
    isProtected: false,
    allowedRole: "*",
  },
];
