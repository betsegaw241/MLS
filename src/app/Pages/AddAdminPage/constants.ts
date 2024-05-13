import { FormValues } from "./types";

export const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  adminEmailAddress: "",
  adminPhoneNumber: "",
  adminPassword: "",
};
export const errorValues = {
  email: {
    invalid: "Invalid email address",
    required: "Email is required",
  },

  adminPhoneNumber: {
    invalid: "Invalid phone number",
    required: "Phone Number is required",
    min: "Phone Number must be at least 10 digits",
    max: "Phone Number is too long",
  },
  adminPassword: {
    invalid: "Invalid password",
    required: "Password is required",
    min: "Password must be at least 10 digits",
    max: "Password is too long",
    combination: "Password must include combination of characters",
  },
  firstName: {
    required: "First Name is required",
    invalid: "Invalid first name",
  },
  lastName: {
    required: "Last Name is required",
    invalid: "Invalid last name",
  },
};
