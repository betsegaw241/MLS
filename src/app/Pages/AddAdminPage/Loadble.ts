import { lazyLoad } from 'utils/loadable';

export const AddAdminPage = lazyLoad(
  () => import('./index'),
  module => module.default,
);
