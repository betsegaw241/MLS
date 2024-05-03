import * as Yup from "yup";
import { errorValues } from "./constants";
import { FileObject } from "./types";

export const addPharmacyValidationSchema = Yup.object({
  name: Yup.string().trim().required(errorValues.name.required),
  address: Yup.string().trim().required(errorValues.address.required),
  email: Yup.string()
    .email(errorValues.email.invalid)
    .required(errorValues.email.required),

  phoneNumber: Yup.string()
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/,
      errorValues.phoneNumber.invalid
    )
    .max(10, errorValues.phoneNumber.max)
    .required(errorValues.phoneNumber.required)

    .min(1, errorValues.phoneNumber.min),
  location: Yup.string().trim().required(errorValues.location.required),

  pharmacyLicense: Yup.mixed()
    .required(errorValues.pharmacyLicense.required)
    .test("fileType", errorValues.pharmacyLicense.fileType, (value) => {
      if (!value) return true; // Allow empty field, assuming it's optional
      const supportedFileTypes = ["image/jpeg", "image/png",, "image/jpg"];
      return supportedFileTypes.includes((value as FileObject)?.type); // Use type assertion
    })
    .test("fileSize", errorValues.pharmacyLicense.fileSize, (value) => {
      if (!value) return true; // Allow empty field, assuming it's optional
      const maxSize = 5 * 1024 * 1024; // 5MB
      return (value as FileObject)?.size <= maxSize; // Use type assertion
    }),
});
