/* --- STATE --- */


export interface IRedirectAction {
  path: string | null;
  param?: string;
}
export type IRoleAction = string;
export type IModeAction = string;

export interface DashboardPageState {
  pharmcy: Ipharmacy;
  errorMessage: string;
  isLoading: boolean;
}

export interface Ipharmacy {
  _id: string;
  name: string;
  logo: string;
  email: string;
  phoneNumber: string;
}
