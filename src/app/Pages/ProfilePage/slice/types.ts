
export interface Profile {
  name: string;
  email: string;
  phone: string;
  
}

export interface editProfilePageState {
  isAuthenticated: any;
  isCreating: any;
  profile?:Profile;
  errorMessage: string;
  isEditing: boolean;
}
