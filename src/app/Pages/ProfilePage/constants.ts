import { FormValues } from "./types";
export const initialValues: FormValues = {
    email: "",
    phone: "",
    name: ""
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
    min: "Phone must be at least 10 digits",
    max: "Phone is too long",
    required: "Phone is required",
  },
};
