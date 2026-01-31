import axios, { type AxiosRequestConfig } from "axios";

export interface FetchDataResponse<T> {
  page: number;
  limit: number;
  total: number;
  data: T[];
}

const axiosIntance = axios.create({
  baseURL: "http://localhost:3000/movies",
});

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosIntance.get<T>(this.endpoint, config).then((res) => res.data);
  };

  getAllPaginated = (config: AxiosRequestConfig) => {
    return axiosIntance
      .get<FetchDataResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (slug: string | number, config: AxiosRequestConfig) => {
    return axiosIntance
      .get<T>(`${this.endpoint}/${slug}`, config)
      .then((res) => res.data);
  };
}

export default ApiClient;
