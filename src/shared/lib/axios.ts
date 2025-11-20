import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

class API {
  async get<TResult>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<TResult | null> {
    try {
      const response: AxiosResponse<TResult> = await axiosClient.get(
        url,
        config
      );

      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async put<TData, TResult>(
    url: string,
    data: TData,
    config?: AxiosRequestConfig
  ) {
    try {
      const response: AxiosResponse<TResult> = await axiosClient.put(
        url,
        data,
        config
      );

      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

const api = new API();

export default api;
