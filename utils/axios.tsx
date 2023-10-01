import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
//   timeout: 5000,
});

// Function to make a GET request with query parameters and headers
export const getApiCall = async (
  endpoint: string,
  params: Record<string, any> = {}, // Query parameters
  headers: Record<string, string> = {} // Request headers
) => {
  try {
    const response = await instance.get(endpoint, {
      params, // Query parameters
      headers, // Request headers
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default instance;
