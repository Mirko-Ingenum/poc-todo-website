import ApiError from '../models/ApiError.model';
import AppError from '../models/AppError.model';
import HttpServiceError from '../models/HttpServiceError.model';

export const makeThrowError = (
  errorMapper: (apiError: ApiError) => string,
) => (error: HttpServiceError) => {
  if (error?.name === 'AbortError') {
    throw error;
  }
  if (error?.errors?.length) {
    const errors = error.errors.map(errorMapper);

    throw new AppError(errors);
  }

  throw new AppError(['Une erreur s\'est produite. Veuillez réessayer ultérieurement']);
};
