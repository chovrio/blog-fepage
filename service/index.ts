import axios from "axios";
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";
import { BaseURL, OriginURL } from "@/utils/BaseURL";
class Request {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }
  // 公共的请求的方法
  request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return new Promise((resolve, reject) => {
      // 开始发起网络请求
      this.instance
        .request<T>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  get<T = any>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: "get" });
  }
  post<T = any>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: "post" });
  }
  delete<T = any>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: "delete" });
  }
  put<T = any>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: "put" });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
const instance = new Request({
  baseURL: BaseURL,
  timeout: 10000,
});
const origin = new Request({
  baseURL: OriginURL,
  timeout: 10000,
});

export { instance, origin };
