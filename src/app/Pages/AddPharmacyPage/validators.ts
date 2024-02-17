import * as Yup from "yup";
import { errorValues } from "./constants";
import { FileObject } from "./types";

export const addPharmacyValidationSchema = Yup.object({
  pharmacyName: Yup.string().trim().required(errorValues.pharmacyName.required),
  pharmacyEmailAddress: Yup.string()
    .email(errorValues.email.invalid)
    .required(errorValues.email.required),

  pharmacyPhoneNumber: Yup.string()
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/,
      errorValues.pharmacyPhoneNumber.invalid
    )
    .max(10, errorValues.pharmacyPhoneNumber.max)
    .required(errorValues.pharmacyPhoneNumber.required)

    .min(1, errorValues.pharmacyPhoneNumber.min),
  pharmacyLocation: Yup.string()
    .trim()
    .required(errorValues.pharmacyLocation.required),

  pharmacyLicense: Yup.mixed()
    .required(errorValues.pharmacyLicense.required)
    .test("fileType", errorValues.pharmacyLicense.fileType, (value) => {
      if (!value) return true; // Allow empty field, assuming it's optional
      const supportedFileTypes = ["application/pdf", "image/jpeg", "image/png"];
      return supportedFileTypes.includes((value as FileObject)?.type); // Use type assertion
    })
    .test("fileSize", errorValues.pharmacyLicense.fileSize, (value) => {
      if (!value) return true; // Allow empty field, assuming it's optional
      const maxSize = 5 * 1024 * 1024; // 5MB
      return (value as FileObject)?.size <= maxSize; // Use type assertion
    }),
  nigdFikad: Yup.mixed()
    .required(errorValues.nigdFikad.required)

    .test("fileType", errorValues.nigdFikad.fileType, (value) => {
      if (!value) return true; // Allow empty field, assuming it's optional
      const supportedFileTypes = ["application/pdf", "image/jpeg", "image/png"];
      return supportedFileTypes.includes((value as FileObject)?.type); // Use type assertion
    })
    .test("fileSize", errorValues.nigdFikad.fileSize, (value) => {
      if (!value) return true; // Allow empty field, assuming it's optional
      const maxSize = 5 * 1024 * 1024; // 5MB
      return (value as FileObject)?.size <= maxSize; // Use type assertion
    }),
});

