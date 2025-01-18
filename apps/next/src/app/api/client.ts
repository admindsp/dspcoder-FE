import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

const createClient = (): AxiosInstance => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  });
};

const handleRequest = async <T>(requestFn: () => Promise<T>): Promise<T> => {
  try {
    return await requestFn();
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
};

const http_client = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    handleRequest(() =>
      createClient()
        .get<T>(url, config)
        .then((res) => res.data)
    ),

  post: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    handleRequest(() =>
      createClient()
        .post<T>(url, data, config)
        .then((res) => res.data)
    ),

  put: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    handleRequest(() =>
      createClient()
        .put<T>(url, data, config)
        .then((res) => res.data)
    ),

  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    handleRequest(() =>
      createClient()
        .delete<T>(url, config)
        .then((res) => res.data)
    ),
};

export default http_client;
