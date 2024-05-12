import * as Yup from "yup";
import { errorValues } from "./constants";
import { FileObject } from "./types";

export const createAccoutSchemaStep1 = Yup.object({
  firstName: Yup.string().trim().required(errorValues.firstName.required),
  lastName: Yup.string().trim().required(errorValues.lastName.required),
  email: Yup.string()
    .email(errorValues.email.invalid)
    .required(errorValues.email.required),
  password: Yup.string(),
  // .min(8, errorValues.password.min)
  // .max(255, errorValues.password.max)
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
  //   errorValues.password.combination
  // )
  // .required(errorValues.password.required)
  confirmPassword: Yup.string(),
  // .min(8, errorValues.password.min)
  // .max(255, errorValues.password.max)
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
  //   errorValues.password.combination
  // )
  // .oneOf([Yup.ref("password")], errorValues.confirmPassword.match)
  // .required("Confirm Password is required")
  phoneNumber: Yup.string()
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/,
      errorValues.phoneNumber.invalid
    )
    .max(10, errorValues.phoneNumber.max)
    .required(errorValues.phoneNumber.required)

    .min(1, errorValues.phoneNumber.min),
  pharmacistLicense: Yup.mixed()
    .required(errorValues.pharmacistLicense.required)

    .test("fileType", errorValues.pharmacistLicense.fileType, (value) => {
      if (!value) return true; // Allow empty field, assuming it's optional
      const supportedFileTypes = ["application/pdf", "image/jpeg", "image/png"];
      return supportedFileTypes.includes((value as FileObject)?.type); // Use type assertion
    })
    .test("fileSize", errorValues.pharmacistLicense.fileSize, (value) => {
      if (!value) return true; // Allow empty field, assuming it's optional
      const maxSize = 5 * 1024 * 1024; // 5MB
      return (value as FileObject)?.size <= maxSize; // Use type assertion
    }),
});

export const createAccoutSchemaStep2 = Yup.object({
  pharmacyName: Yup.string().trim().required(errorValues.pharmacyName.required),
  pharmacyEmailAddress: Yup.string()
    .email(errorValues.email.invalid)
    .required(errorValues.email.required),

  pharmacyPhoneNumber: Yup.string()
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/,
      errorValues.phoneNumber.invalid
    )
    .max(10, errorValues.phoneNumber.max)
    .required(errorValues.phoneNumber.required)

    .min(1, errorValues.phoneNumber.min),
  pharmacyLocation: Yup.string()
    .trim()
    .required(errorValues.pharmacyLocation.required),
});

export const createAccoutSchemaStep3 = Yup.object({
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
  pharmacistLicense: Yup.mixed()
    .required(errorValues.pharmacistLicense.required)

    .test("fileType", errorValues.pharmacistLicense.fileType, (value) => {
      if (!value) return true; // Allow empty field, assuming it's optional
      const supportedFileTypes = ["application/pdf", "image/jpeg", "image/png"];
      return supportedFileTypes.includes((value as FileObject)?.type); // Use type assertion
    })
    .test("fileSize", errorValues.pharmacistLicense.fileSize, (value) => {
      if (!value) return true; // Allow empty field, assuming it's optional
      const maxSize = 5 * 1024 * 1024; // 5MB
      return (value as FileObject)?.size <= maxSize; // Use type assertion
    }),
});
