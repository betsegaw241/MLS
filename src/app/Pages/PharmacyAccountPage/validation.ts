import * as Yup from "yup";
import { Ipharmacy } from "./types";
export const initialValues: Ipharmacy = {
  _id: "",
  name: "",
  email: "",
  phone: "",
  state: "",
  city: "",
  operationalHours: "",
  coverPhoto: "",
  pharmacyLogo: "",
  deliveryWaitingTime: "",
  deliveryTimes: "",
  deliveryArea: "",
  fastDeliveryFee: "",
  deliveryFeeinKm: "",
  isDeliveryAvailable: false,
};

export const errorValues = {
  name: {
    invalid: "Invalid Pharmacy name",
    required: "Pharmacy Name is required",
  },
  email: {
    invalid: "Invalid Pharmacy email",
    required: "Email is required",
  },
  phone: {
    invalid: "Invalid phone number",
    required: "Phone Number is required",
    min: "Phone Number must be at least 10 digits",
    max: "Phone Number is too long",
  },
};

export const editPharmacyAccountValidation = Yup.object({
  name: Yup.string().trim().required(errorValues.name.required),
  email: Yup.string()
    .email(errorValues.email.invalid)
    .required(errorValues.email.required),
  phone: Yup.string()
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/,
      errorValues.phone.invalid
    )
    .max(10, errorValues.phone.max)
    .required(errorValues.phone.required)

    .min(1, errorValues.phone.min),
});
