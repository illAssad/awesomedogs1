import axios from 'axios';
import { Http } from './Http';

const headers = {
  Accept: 'application/json',
 'Content-Type': 'application/json',
};
const url = 'https://api.thedogapi.com/v1/breeds?';

export const httpAxios: Http = {
  get: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await axios.get(url + path, {
      ...config,
      params: params,
      headers,
    });
    return response.data as T;
  },
  post: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await axios.post(
      url + path,
      { ...params },
      { ...config, headers },
    );
    return response.data as T;
  },
  put: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await axios.put(
      url + path,
      { ...params },
      { ...config, headers },
    );
    return response.data as T;
  },
  delete: async <T>(path: string, params?: any, config?: any) => {
    const response = await axios.delete(url + path, {
      ...config,
      params: params,
      headers,
    });
    return response.data as T;
  },
};
