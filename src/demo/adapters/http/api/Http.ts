export interface Http {
  get: <T>(
    path: string,
    params?: Record<string, undefined>,
    config?: undefined,
  ) => Promise<T | undefined>;
  post: <T>(
    path: string,
    params?: Record<string, undefined>,
    config?: undefined,
  ) => Promise<T | undefined>;
  put: <T>(
    path: string,
    params?: Record<string, undefined>,
    config?: undefined,
  ) => Promise<T | undefined>;
  delete: <T>(
    path: string,
    params?: undefined,
    config?: undefined,
  ) => Promise<T | undefined>;
}
