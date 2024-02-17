export interface FormValues {
  pharmacyName: string;
  pharmacyEmailAddress: string;
  pharmacyPhoneNumber: string;
  pharmacyLocation: string;
  pharmacyLicense: FileObject | null;
  nigdFikad: FileObject | null;
}
export interface FileObject {
    name: string;
    type: string;
    size: number;
    path: string;
    // Add any other properties you need for the file
  }
  