import axios, { type AxiosRequestConfig } from "axios";

export interface FetchDataResponse<T> {
  page: number;
  limit: number;
  total: number;
  data: T[];
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
  };

  getAllPaginated = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchDataResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (slug: string | number, config: AxiosRequestConfig) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${slug}`, config)
      .then((res) => res.data);
  };
}

export default ApiClient;
