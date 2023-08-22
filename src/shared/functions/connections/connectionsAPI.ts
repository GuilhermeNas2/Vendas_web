import axios from 'axios';

import { ERROR_ACCESS_DENIED, ERROR_CONNECTION } from '../../constants/errosStatus';
import { MethodsEnum } from '../../Enums/methods.enum';

export default class ConnetionAPI {
  static async call<T>(url: string, method: string, body?: unknown): Promise<T> {
    switch (method) {
      case MethodsEnum.GET:
        return (await axios.get<T>(url)).data;
      case MethodsEnum.DELETE:
        return (await axios.delete<T>(url)).data;
      case MethodsEnum.PATCH:
        return (await axios.patch<T>(url, body)).data;
      case MethodsEnum.PUT:
        return (await axios.put<T>(url, body)).data;
      case MethodsEnum.POST:
      default:
        return (await axios.post<T>(url, body)).data;
    }
  }

  static async connect<T>(url: string, method: string, body?: unknown): Promise<T> {
    return ConnetionAPI.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 403:
          case 401:
            throw new Error(ERROR_ACCESS_DENIED);

          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
      throw new Error(ERROR_CONNECTION);
    });
  }
}

export const connectionAPIGet = async <T>(url: string): Promise<T> => {
  return ConnetionAPI.connect(url, MethodsEnum.GET);
};

export const connectionAPIDelete = async <T>(url: string): Promise<T> => {
  return ConnetionAPI.connect(url, MethodsEnum.DELETE);
};

export const connectionAPIPut = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnetionAPI.connect(url, MethodsEnum.PUT, body);
};

export const connectionAPIPatch = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnetionAPI.connect(url, MethodsEnum.PATCH, body);
};

export const connectionAPIPost = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnetionAPI.connect(url, MethodsEnum.POST, body);
};
