import {
  FormValues,
  UserFormValues,
  ParmacyFormValues,
  DocumentFormValues,
} from "./types";

export const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
  confirmPassword: "",
  pharmacyName: "",
  pharmacyEmailAddress: "",
  pharmacyPhoneNumber: "",
  pharmacyLocation: "",
  pharmacyLicense: null,
  pharmacistLicense: null,
  nigdFikad: null,
};

export const userItialValues: UserFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
  confirmPassword: "",
};
export const pharmacyItialValues: ParmacyFormValues = {
  pharmacyName: "",
  pharmacyEmailAddress: "",
  pharmacyPhoneNumber: "",
  pharmacyLocation: "",
};

export const documentItialValues: DocumentFormValues = {
  pharmacyLicense: null,
  pharmacistLicense: null,
  nigdFikad: null,
};

export const errorValues = {
  email: {
    invalid: "Invalid email address",
    required: "Email is required",
  },
  firstName: {
    invalid: "Invalid first name",
    required: "First Name is required",
  },
  lastName: {
    invalid: "Invalid last name",
    required: "Last Name is required",
  },
  password: {
    min: "Password must be greater than 8",
    max: "Password is too long",
    required: "Password is required",
    combination:
      "Password must contain at least one lowercase, uppercase, digit & special character",
  },
  phoneNumber: {
    invalid: "Invalid phone number",
    required: "Phone Number is required",
    min: "Phone Number must be at least 10 digits",
    max: "Phone Number is too long",
  },
  pharmacyPhoneNumber: {
    invalid: "Invalid phone number",
    required: "Phone Number is required",
    min: "Phone Number must be at least 10 digits",
    max: "Phone Number is too long",
  },
  confirmPassword: {
    match: "Passwords do not match",
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
  pharmacistLicense: {
    required: "Pharmacis License cannot be empty",

    fileType: "Invalid file type. Only PDF or Image files allowed.",
    fileSize: "File size is too large. Maximum size is 5MB.",
  },
  nigdFikad: {
    required: "Nigd Fikad  cannot be empty",

    fileType: "Invalid file type. Only PDF or Image files allowed.",
    fileSize: "File size is too large. Maximum size is 5MB.",
  },
};
