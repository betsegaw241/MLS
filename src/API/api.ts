/* eslint-disable @typescript-eslint/no-explicit-any */
import { HeaderObj, IAPICallConfig } from "./types";
import { API_ROUTE, cookieKeys } from "../utils/constants";
import axios, { AxiosResponse } from "axios";
import APIError from "./APIError";
import { baseErrors } from "./ErrorCodes";
import Cookies from "js-cookie";

const api = async (config: IAPICallConfig) => {
  try {
    const fullURL = `${API_ROUTE}${config.route}`;
    const header: HeaderObj = config.header || {};
    const authToken = config.isSecureRoute
      ? localStorage.getItem("token") || Cookies.get(cookieKeys.authToken)
      : undefined;

    if (authToken) {
      header.Authorization = `Bearer ${authToken}`;
    }

    const response: AxiosResponse = await axios({
      method: config.method,
      params: config.query,
      data: config.body,
      url: fullURL,
      headers: { ...header },
      responseType: config.responseType || "json",
      onUploadProgress: config.onUploadProgress,
    });
    if (response.status === 200) {
      return response;
    } else {
      throw new APIError(response.data?.code, response.data?.message);
    }
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const response = error.response;
      if (response) {
        throw new APIError(response.data?.code, response.data?.message);
      }
    }
    throw JSON.stringify(new APIError(baseErrors.NETWORK));
  }
};

export default api;
