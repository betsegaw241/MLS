export interface FormValues {
  avatar: string;
  phone: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
export interface FileObject {
  name: string;
  type: string;
  size: number;
  path: string;
}
export interface ChangePassword {
  confirmPassword: String;
  currentPassword: String;
  newPassword: String;
}
