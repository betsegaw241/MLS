import { FormValues } from "./types";

export const initialValues: FormValues = {
  pharmacyName: "",
  pharmacyEmailAddress: "",
  pharmacyPhoneNumber: "",
  pharmacyLocation: "",
  pharmacyLicense: null,
  nigdFikad: null,
};
export const errorValues = {
  email: {
    invalid: "Invalid email address",
    required: "Email is required",
  },

  pharmacyPhoneNumber: {
    invalid: "Invalid phone number",
    required: "Phone Number is required",
    min: "Phone Number must be at least 10 digits",
    max: "Phone Number is too long",
  },

  pharmacyLocation: {
    // invalid: "Invalid last name",
    required: "Location is required",
  },
  pharmacyName: {
    // invalid: "Invalid first name",
    required: "Pharmacy Name is required",
  },
  pharmacyLicense: {
    required: "Pharmacy License cannot be empty",
    fileType: "Invalid file type. Only PDF or Image files allowed.",
    fileSize: "File size is too large. Maximum size is 5MB.",
  },

  nigdFikad: {
    required: "Nigd Fikad  cannot be empty",

    fileType: "Invalid file type. Only PDF or Image files allowed.",
    fileSize: "File size is too large. Maximum size is 5MB.",
  },
};
