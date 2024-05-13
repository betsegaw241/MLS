import { FormValues } from "./types";
export const initialValues: FormValues = {
  email: "",
  password: "",
};

export const errorValues = {
  email: {
    invalid: "Invalid email address",
    required: "Email is required",
  },
  password: {
    min: "Password must be grater than 8",
    max: "Password is too long",
    required: "Password is required",
    combination:
      "password must contain at least one lowercase, uppercase, digit & special character",
  },
};

export const changePassworderrorValues = {

  password: {
    min: "Password must be greater than 8",
    max: "Password is too long",
    required: "Password is required",
    combination:
      "Password must contain at least one lowercase, uppercase, digit & special character",
  },
 
  confirmPassword: {
    match: "Passwords do not match",
  },


};
