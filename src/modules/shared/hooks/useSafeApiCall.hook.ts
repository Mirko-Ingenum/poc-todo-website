import { useCallback } from 'react';

import HttpService from '../models/HttpService.model';
import useHttpService from './useHttpService.hook';

const useSafeApiCall = <T extends any, A extends any[]>(
  apiFunc: (service: HttpService) => (...args: A) => Promise<T>,
) => {
  const httpService = useHttpService();

  const func = useCallback(
    async (...args: A): Promise<[T, boolean]> => {
      try {
        const result = await apiFunc(httpService)(...args);
        return [result, false];
      } catch (error: any) {
        if (error?.name === 'AbortError') {
          // @ts-ignore
          return [null, true];
        }

        throw error;
      }
    },
    [httpService],
  );

  return func;
};

export default useSafeApiCall;
