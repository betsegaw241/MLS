import { FormValues } from "./types";
export const initialValues: FormValues = {
  email: "",
  phone: "",
  name: "",
};

export const errorValues = {
  name: {
    required: "Name is required",
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
