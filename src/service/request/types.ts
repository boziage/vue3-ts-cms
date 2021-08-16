import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface BORequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface BORequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: BORequestInterceptors<T>
  showLoading?: boolean
}

export interface IDataType<T = any> {
  code: number
  data: T
}
