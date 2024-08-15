interface IInterceptor {
  requestSuccessFn?: (config: WdUploadFileOptions | WdRequestOptions) => any
  responseSuccessFn?: (config: any) => any
}

// 构造函数的配置
export interface WdRequestConstructorConfig {
  baseUrl?: string
  timeout?: number
  interceptor?: IInterceptor
}

/**
 * 请求配置接口
 * 通过Omit过滤掉url类型，重写url类型
 */
export type WdRequestOptions = Omit<UniApp.RequestOptions, 'url'> & {
  interceptor?: IInterceptor
  query?: Record<string, any>
  url?: string // 重写url类型
}

export type WdUploadFileOptions = UniApp.UploadFileOption & {
  interceptor?: IInterceptor
}
