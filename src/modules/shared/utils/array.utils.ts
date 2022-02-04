interface ReducedObject<T> {
  [key: string]: T
}

export function reduceToObject<T, Y>(
  array: T[],
  keySelector: (obj: T) => string,
  map: (obj: T) => Y,
): ReducedObject<Y> {
  return array.reduce(
    (values: any, currentValue: T) => ({
      ...values,
      [keySelector(currentValue)]: map(currentValue),
    }),
    {},
  );
}

export const count = <T>(
  array: T[],
  predicate: (item: T) => boolean,
) => array.filter(predicate).length;
