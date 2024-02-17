import { lazyLoad } from 'utils/loadable';

export const AddPharmacyPage = lazyLoad(
  () => import('./index'),
  module => module.default,
);
