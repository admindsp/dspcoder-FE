import axios, { AxiosRequestConfig } from "axios";

export const client_call = () => {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  });

  return client;
};

const http_client = {
  get: async (url: string, config?: AxiosRequestConfig) => {
    const client = client_call();
    const response = await client.get(url, config);
    return response.data;
  },
  post: async (url: string, data?: any, config?: AxiosRequestConfig) => {
    const client = client_call();
    const response = await client.post(url, data, config);
    return response.data;
  },
  put: async (url: string, data?: any, config?: AxiosRequestConfig) => {
    const client = client_call();
    const response = await client.put(url, data, config);
    return response.data;
  },
  delete: async (url: string, config?: AxiosRequestConfig) => {
    const client = client_call();
    const response = await client.delete(url, config);
    return response.data;
  },
};

export default http_client;
