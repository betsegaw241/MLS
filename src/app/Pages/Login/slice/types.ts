/* --- STATE --- */

import { IUser, IUserModel } from "app/models/user";

export interface IRedirectAction {
  path: string | null;
  param?: string;
}
export type IRoleAction = string;
export type IModeAction = string;
export interface LoginState {
  redirectTo: IRedirectAction;
  mode: string;
  role: string;
  user?: IUser;
  isLogging: boolean;
  isAuthenticated: boolean;
  errorMessage: string;
}
