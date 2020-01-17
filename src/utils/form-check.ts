import { CheckedInputType } from '../interface/quest.interface';
import { getSaveValue } from './localStorage';

const isNotEmptyArray = <T extends any>(field: T | T[]): boolean =>
  Array.isArray(field) && !!field.length;

export const isEmptyField = (field: string | string[]): boolean =>
  !((!Array.isArray(field) && field !== "") || isNotEmptyArray(field));

export const isEmptyForm = (fieldObject: Object): boolean =>
  Object.entries(fieldObject).some(el =>
    isEmptyField(el[1] as string | string[])
  );

export const isCheckedCheckbox = (formName: string, value: string): boolean => {
  const savesValue: string[] | undefined = getSaveValue(formName)?.split(",");
  console.log(`CheckBox ${savesValue}`);

  if (savesValue === undefined) return false;
  return savesValue.includes(value);
};

export const isCheckedRadio = (formName: string, value: string): boolean => {
  const savesValue: string | undefined = getSaveValue(formName);
  if (savesValue === undefined) return false;
  return savesValue === value;
};

export const isChecked = (
  type: CheckedInputType,
  formName: string,
  valueString: string | undefined
): boolean => {
  if (valueString === undefined) return false;
  return type === "checkbox"
    ? isCheckedCheckbox(formName, valueString)
    : isCheckedRadio(formName, valueString);
};
