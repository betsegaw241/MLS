export interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
  address: string;
  pharmacyLicense: FileObject | null;
}
export interface FileObject {
  name: string;
  type: string;
  size: number;
  path: string;
}
