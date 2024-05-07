
export interface Account {
  password: string;
  confirmPassword: string;
}

export interface createAdminPwdPageState {
  account?: Account;
  errorMessage: string;
  isPasswordCreated: boolean;
}
