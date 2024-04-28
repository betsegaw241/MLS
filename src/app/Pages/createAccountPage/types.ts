export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  pharmacyName: string;
  pharmacyEmailAddress: string;
  pharmacyPhoneNumber: string;
  pharmacyLocation: string;
  pharmacyLicense: FileObject | null;
  pharmacistLicense: FileObject | null;
  nigdFikad: FileObject | null;
}
export interface FileObject {
  name: string;
  type: string;
  size: number;
  path: string;
  // Add any other properties you need for the file
}

export interface UserFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  pharmacistLicense: FileObject | null;
}
export interface ParmacyFormValues {
  pharmacyName: string;
  pharmacyEmailAddress: string;
  pharmacyPhoneNumber: string;
  pharmacyLocation: string;
}
export interface DocumentFormValues {
  pharmacyLicense: FileObject | null;
  pharmacistLicense: FileObject | null;
  nigdFikad: FileObject | null;
}
export interface Ipharmacist {
  pharmacistLicense: File | null;
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
}
