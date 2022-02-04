import HttpServiceError from '../models/HttpServiceError.model';
import Queue from '../utils/queue.utils';

type Method = 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH' | 'HEAD';


const createHeaders = (headers?: Headers, contentType?: Record<string, string>) => {
  const httpHeaders = {
    ...contentType,
    'Accept-Language': 'fr',
  };

  const h = new Headers(httpHeaders);

  if (headers) {
    headers.forEach((val, key) => {
      h.append(key, val);
    });
  }

  return h;
};

const exec = async <T extends any>(
  endpoint: string,
  method: Method,
  headers?: Headers,
  body?: any,
): Promise<T> => {
  const result = await fetch(`${process.env.REACT_APP_API_URL}${endpoint}`,
    {
      method,
      body,
      headers,
    });

  const text = await result.text();

  if (!text) {
    if (!result.ok) {
      throw new HttpServiceError([{ code: result.status.toString(10) }]);
    }

    // @ts-ignore
    return text as T;
  }

  const response = JSON.parse(text);
  if (!result.ok) {
    if (response.errors) {
      throw new HttpServiceError(response.errors);
    }

    throw new HttpServiceError([{ code: result.status.toString(10) }]);
  }

  return response.data;
};

const execJson = <T>(
  endpoint: string,
  method: Method,
  body?: any,
  headers?: Headers,
  abortSignal?: AbortSignal,
): Promise<T> => exec<T>(
  endpoint,
  method,
  createHeaders(headers, { 'Content-Type': 'application/json' }),
  body && JSON.stringify(body),
);

const execFormData = <T>(
  endpoint: string,
  method: Method,
  body: FormData,
  headers?: Headers,
  abortSignal?: AbortSignal,
) => exec<T>(
  endpoint,
  method,
  createHeaders(headers),
  body,
);

const get = <T>(endpoint: string, headers?: Headers, abortSignal?: AbortSignal) => execJson<T>(endpoint, 'GET', undefined, headers, abortSignal);

const post = <T>(endpoint: string, body: any, headers?: Headers, abortSignal?: AbortSignal) => execJson<T>(endpoint, 'POST', body, headers, abortSignal);

const postFormData = <T>(endpoint: string, body: FormData, headers?: Headers, abortSignal?: AbortSignal) => execFormData<T>(endpoint, 'POST', body, headers, abortSignal);

const put = <T>(endpoint: string, body: any, headers?: Headers, abortSignal?: AbortSignal) => execJson<T>(endpoint, 'PUT', body, headers, abortSignal);

const putFormData = <T>(endpoint: string, body: FormData, headers?: Headers, abortSignal?: AbortSignal) => execFormData<T>(endpoint, 'PUT', body, headers, abortSignal);

const remove = (endpoint: string, headers?: Headers, abortSignal?: AbortSignal) => execJson<void>(endpoint, 'DELETE', undefined, headers, abortSignal);



export default {
  get,
  post,
  put,
  remove,
  postFormData,
  putFormData,

};
