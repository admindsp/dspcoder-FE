import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

const createAzureClient = (): AxiosInstance => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_AZURE_API_URL,
  });
};

const handleRequest = async <T>(requestFn: () => Promise<T>): Promise<T> => {
  try {
    return await requestFn();
  } catch (error) {
    console.error("Azure API Request failed:", error);
    throw error;
  }
};

const azure_client = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    handleRequest(() =>
      createAzureClient()
        .get<T>(url, config)
        .then((res) => res.data)
    ),

  post: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    handleRequest(() =>
      createAzureClient()
        .post<T>(url, data, config)
        .then((res) => res.data)
    ),

  put: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    handleRequest(() =>
      createAzureClient()
        .put<T>(url, data, config)
        .then((res) => res.data)
    ),

  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    handleRequest(() =>
      createAzureClient()
        .delete<T>(url, config)
        .then((res) => res.data)
    ),
};

export default azure_client;
