import { CheckedInputType } from '../interface/quest.interface';
import { isEmptyArray } from './array';
import { isEmptyString } from './element';

/**
 * Check input element is empty he.
 * @param field - array of string or string what checke from empty
 */
export const isEmptyField = (field: string | string[]): boolean =>
  Array.isArray(field) ? isEmptyArray(field) : isEmptyString(field);

/**
 * Check form submite data is all field not empty
 * @param fieldObject - object what get from react-hook-form
 */
export const isHaveEmptyFieldForm = (
  fieldObject: Record<string, string | string[]>
): boolean => Object.entries(fieldObject).some(el => isEmptyField(el[1]));

/**
 * Check this radiobutton/checkbox checke before
 * @param type - checked input element type
 * @param beforeValue - name of from group element
 * @param valueString - string with list of before checked value
 */
export const isChecked = (
  type: CheckedInputType,
  beforeValue: string | undefined,
  valueString: string | undefined
): boolean => {
  if (valueString === undefined || beforeValue === undefined) return false;
  return type === "checkbox"
    ? beforeValue.split(",").includes(valueString)
    : Object.is(beforeValue, valueString);
};
