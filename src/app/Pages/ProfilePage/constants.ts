import { FormValues } from "./types";
export const initialValues: FormValues = {
  email: "",
  phone: "",
  firstName: "",
  lastName: "",
  avatar: ""
};

export const errorValues = {
  firstName: {
    required: " First Name is required",
  },
  lastName: {
    required: " Last Name is required",
  },
  email: {
    invalid: "Invalid email address",
    required: "Email is required",
  },
  phone: {
    invalid: "Invalid phone number",
    required: "Phone Number is required",
    min: "Phone Number must be at least 10 digits",
    max: "Phone Number is too long",
  },
};
