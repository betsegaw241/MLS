/* eslint-disable @typescript-eslint/no-explicit-any */
import { HeaderObj, IAPICallConfig } from "./types";
import { API_ROUTE, cookieKeys } from "../utils/constants";
import axios, { AxiosResponse } from "axios";
import APIError from "./APIError";
import { baseErrors } from "./ErrorCodes";
import Cookies from "js-cookie";

const api = async (config: IAPICallConfig) => {
  let authToken;

  try {
    const fullURL = `${API_ROUTE}${config.route}`;
    const header: HeaderObj = config.header || {};

    if (config.isSecureRoute) {
      authToken =
        localStorage.getItem("token") || Cookies.get(cookieKeys.authToken);
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
      return response.data;
    } else {
      throw new APIError(response.data?.code, response.data?.message);
    }
  } catch (error: any) {
    console.log('error-----',error?.response.data)
    if (error?.response) {
      const { response } = error;
      if (response) {
        if (response.status === 401) {
          handleTokenExpiration();
        }
      }
      if (error instanceof APIError) throw error;
      else throw (response.data?.code, response.data?.message);
    }
    throw new APIError(baseErrors.NETWORK);
  }
};

export default api;

function handleTokenExpiration() {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  localStorage.removeItem("email");
  localStorage.removeItem("name");
  localStorage.removeItem("role");
}

//   try {
//     const fullURL = `${API_ROUTE}${config.route}`;
//     const header: HeaderObj = config.header || {};
//     const authToken = config.isSecureRoute
//       ? localStorage.getItem("token") || Cookies.get(cookieKeys.authToken)
//       : undefined;

//     if (authToken) {
//       header.Authorization = `Bearer ${authToken}`;
//     }

//     const response: AxiosResponse = await axios({
//       method: config.method,
//       params: config.query,
//       data: config.body,
//       url: fullURL,
//       headers: { ...header },
//       responseType: config.responseType || "json",
//       onUploadProgress: config.onUploadProgress,
//     });
//     if (response.status === 200) {
//       return response;
//     } else {
//       throw new APIError(response.data?.code, response.data?.message);
//     }
//   } catch (error: any) {
//     if (axios.isAxiosError(error)) {
//       const response = error.response;
//       if (response) {
//         if (response.status === 401) {
//           handleTokenExpiration();
//         } else {
//           throw new APIError(response.data?.code, response.data?.message);
//         }
//       }
//     }
//     throw JSON.stringify(new APIError(baseErrors.NETWORK));
//   }
// };
