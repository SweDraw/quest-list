import { CheckedInputType } from '../interface/quest.interface';
import { getSaveValue } from './localStorage';

/**
 * Check is array is empty
 * @param field - array what checked
 */
const isEmptyArray = <T extends any>(field: T[]): boolean =>
  Array.isArray(field) && !field.length;
/**
 * Check is empty string
 * @param field - string what checked
 */
const isEmptyString = (field: string) => field === "";
/**
 * Check input element is empty he.
 * @param field - array of string or string what checke from empty
 */
export const isEmptyField = (field: string | string[]): boolean =>
  (!Array.isArray(field) && isEmptyString(field)) ||
  isEmptyArray(field as string[]);
/**
 * Check form submite data is all field not empty
 * @param fieldObject - object what get from react-hook-form
 */
export const isHaveEmptyFieldForm = (fieldObject: Object): boolean =>
  Object.entries(fieldObject).some(el =>
    isEmptyField(el[1] as string | string[])
  );
/**
 * Check is checked before this checkbox
 * @param formName - name of form checkbox list
 * @param value - array in string with before checked field
 */
export const isCheckedCheckbox = (formName: string, value: string): boolean => {
  const savesValue: string[] | undefined = getSaveValue(formName)?.split(",");
  if (savesValue === undefined) return false;
  return savesValue.includes(value);
};
/**
 * Creack is radiobutton is checked before
 * @param formName - name of radiobutton group what checked
 * @param value - value from radiobutton group what set before
 */
export const isCheckedRadio = (formName: string, value: string): boolean => {
  const savesValue: string | undefined = getSaveValue(formName);
  if (savesValue === undefined) return false;
  return savesValue === value;
};
/**
 * Check this radiobutton/checkbox checke before
 * @param type - checked input element type
 * @param formName - name of from group element
 * @param valueString - string with list of before checked value
 */
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
