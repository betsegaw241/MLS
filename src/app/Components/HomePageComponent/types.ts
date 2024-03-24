export interface HomePageProps {
  pharmacies: pharmacy[];
  errorMessage: string;
}

export interface pharmacy {
  _id: string;
  name: string;
  logo: string;
  email: string;
  phoneNumber: string;
}
