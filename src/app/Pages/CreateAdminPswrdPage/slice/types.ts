export interface Account {
  password: string;
  confirmPassword: string;
}

export interface createAdminPwdPageState {
  loading: boolean;
  account?: Account;
  errorMessage: string;
  isPasswordCreated: boolean;
}
