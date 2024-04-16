import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000,
});

instance.interceptors.request.use(
  (request: AxiosRequestConfig): any => {
    request.headers = {
      ...request.headers,
      "Content-Type": "application/json",
    };

    // remove unnecessary or without value query params from request url
    if (Object.keys(request.params ?? {}).length) {
      for (const key of Object.keys(request.params)) {
        if (request.params[key] === "" || !request.params) {
          delete request.params[key];
        }
      }
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export { instance as api };
