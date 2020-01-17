const isNotEmptyArray = <T extends any>(field: T | T[]): boolean =>
  Array.isArray(field) && !!field.length;

export const isEmptyField = (field: string | string[]): boolean =>
  !((!Array.isArray(field) && field !== "") || isNotEmptyArray(field));

export const isEmptyForm = (fieldObject: Object): boolean =>
  Object.entries(fieldObject).some(el =>
    isEmptyField(el[1] as string | string[])
  );
