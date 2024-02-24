export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface FileObject {
  name: string;
  type: string;
  size: number;
  path: string;
  // Add any other properties you need for the file
}