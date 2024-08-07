import { ChangePassword, FormValues } from "./types";
export const initialValues: FormValues = {
  phone: "",
  avatar: "",
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};
export const passwordinitialValues: ChangePassword = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const errorValues = {
  phone: {
    invalid: "Invalid phone number",
    required: "Phone Number is required",
    min: "Phone Number must be at least 10 digits",
    max: "Phone Number is too long",
  },
  currentPassword: {
    required: " current password is required",
    min: "currentPassword must be at least 6 digits",
  },
  newPassword: {
    required: " new password is required",
    min: "newPassword must be at least 6 digits",
  },
  confirmPassword: {
    required: " confirm the password",
    min: "confirmPassword must be at least 6 digits",
  },
};
