export interface homePageState {
  pharmcies: pharmacy[];
  errorMessage: string;
  isLoading: boolean;
}

export interface pharmacy {
  _id: string;
  name: string;
  logo: string;
  email: string;
  phoneNumber: string;
}
