import * as Yup from "yup";
import { pharmacyInformation,delivetData } from "./types";

export const initialValues: pharmacyInformation = {
  _id: "",
  name: "",
  email: "",
  phone: "",
  adress: "",
  operationalHours: "",
  coverPhoto: "",
  pharmacyLogo: "",
};

export const editPharmacyIntialValues: delivetData = {
  minWaitingTime: undefined,
  maxWaitingTime: undefined,
  minWaitingTimeUnit: "",
  maxWaitingTimeUnit: "",
  deliveryTimes: "",
  isDeliveryAvailable: false,
  deliveryFeeinKm: "",
  deliveryArea: 0,
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
  phoneNumber: {
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
  phoneNumber: Yup.string()
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/,
      errorValues.phoneNumber.invalid
    )
    .max(10, errorValues.phoneNumber.max)
    .required(errorValues.phoneNumber.required)

    .min(1, errorValues.phoneNumber.min),
});

export const editDeliveryInformationValidation = Yup.object({
  deliveryCoverage: Yup.number().typeError("Delivery coverage should be in km"),
  deliverPricePerKm: Yup.number().typeError(
    "Deliver price per km should be a number"
  ),
  minWaitingTime: Yup.number().positive("Waiting time must be positive"),
  maxWaitingTime: Yup.number().positive("Waiting time must be positive"),
  minWaitingTimeUnit: Yup.string().when(
    "minWaitingTime",
    (minWaitingTime: any, schema) => {
      return minWaitingTime != 0
        ? schema.required("Time unit required")
        : schema;
    }
  ),
  maxWaitingTimeUnit: Yup.string().when(
    "maxWaitingTime",
    (maxWaitingTime: any, schema) => {
      return maxWaitingTime != 0
        ? schema.required("Time unit required")
        : schema;
    }
  ),
});
