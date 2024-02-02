export const API_ROUTE = import.meta.env.VITE_API_ROUTE;


const bases = {
  user: '/user',
};

const user = {
  base: bases.user,
  login: `${bases.user}/login`,
};

const apiRoutes = { user };
export default apiRoutes;

export const cookieKeys = {
  authToken: 'au-few92',
};

export const routeConstants = {
  home: '/',
  login: '/login',
  signup: '/sign-up',
};