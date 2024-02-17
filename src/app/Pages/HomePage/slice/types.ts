
export interface homePageState {
  pharmcies:pharmacy[];
  errorMessage: string;
  isLoading: boolean;
}

export interface pharmacy {
  name:string;
  logo:string;
  
}