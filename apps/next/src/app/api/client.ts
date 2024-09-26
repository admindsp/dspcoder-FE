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
    try {
      const response = await client.get(url, config);
      return response.data;
    } catch (error) {
      console.error("GET request failed:", error);
      throw error;
    }
  },
  post: async (url: string, data?: any, config?: AxiosRequestConfig) => {
    const client = client_call();
    try {
      const response = await client.post(url, data, config);
      return response.data;
    } catch (error) {
      console.error("POST request failed:", error);
      throw error;
    }
  },
  put: async (url: string, data?: any, config?: AxiosRequestConfig) => {
    const client = client_call();
    try {
      const response = await client.put(url, data, config);
      return response.data;
    } catch (error) {
      console.error("PUT request failed:", error);
      throw error;
    }
  },
  delete: async (url: string, config?: AxiosRequestConfig) => {
    const client = client_call();
    try {
      const response = await client.delete(url, config);
      return response.data;
    } catch (error) {
      console.error("DELETE request failed:", error);
      throw error;
    }
  },
};

export default http_client;
