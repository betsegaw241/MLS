import * as Yup from "yup";
import { errorValues } from "./constants";

export const feedbackSchema = Yup.object({
  title: Yup.string().required(errorValues.title.required),

  message: Yup.string().required(errorValues.message.required),
});

