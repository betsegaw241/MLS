import { FormValues } from "./types";

export const initialValues: FormValues = {
  password: "",
  confirmPassword: "",
};
export const errorValues = {
  password: {
    required: "Password is required",
    min: "Password must be at least 6 characters",
  },
  confirmPassword: {
    required: "Required to confirm Password",
    min: "Password must be at least 6 characters",
  },
};
