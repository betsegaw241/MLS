import * as Yup from "yup";
import { errorValues } from "./constants";
import { FileObject } from "./types";

export const EditSchema = Yup.object({
  phone: Yup.string()
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/,
      errorValues.phone.invalid
    )
    .max(10, errorValues.phone.max)
    .required(errorValues.phone.required)

    .min(1, errorValues.phone.min),
  picture: Yup.mixed()
    .test(
      "fileType",
      "Invalid file type. Only Image files allowed.",
      (value) => {
        if (!value) return true;
        const supportedFileTypes = [
          "application/pdf",
          "image/jpeg",
          "image/png",
        ];
        return supportedFileTypes.includes((value as FileObject)?.type);
      }
    )
    .test(
      "fileSize",
      "File size is too large. Maximum size is 5MB.",
      (value) => {
        if (!value) return true;
        const maxSize = 5 * 1024 * 1024; // 5MB
        return (value as FileObject)?.size <= maxSize;
      }
    ),
});

export const changePasswordValidationSchema = Yup.object({
  newPassword: Yup.string()
    .required(errorValues.newPassword.required)
    .min(8, "Your password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Your password must contain at least one letter, one number, and one special character"
    ),
  currentPassword: Yup.string()
    .required(errorValues.currentPassword.required)
    .min(6, errorValues.currentPassword.min),
  confirmPassword: Yup.string()
    .required(errorValues.confirmPassword.required)
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .min(8, "Your password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Your password must contain at least one letter, one number, and one special character"
    ),
});
