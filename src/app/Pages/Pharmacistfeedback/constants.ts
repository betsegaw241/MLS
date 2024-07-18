import { FormValues } from "./types";
export const initialValues: FormValues = {
  title: "",
  content: "",
};

export const errorValues = {
  title: {
    required: "title is required",
  },
  message: {
    required: " current password is required",
    min: "message must be at least 10 characters",
  },
};
