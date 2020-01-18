import { CheckedInputType } from '../interface/quest.interface';
import { getCheckboxListValue } from './form';

/**
 * Get storage value by name
 * @param fieldName - name of field from storage
 */
export const getSaveValue = (fieldName: string): string | undefined =>
  localStorage.getItem(fieldName)?.toString();
/**
 * Save field to storage
 * @param fieldName - name of save field
 * @param newValue - value from save field
 */
export const saveValueToStorage = (
  fieldName: string,
  newValue: string | string[]
): void => localStorage.setItem(fieldName, newValue.toString());
/**
 * Remove field from storage by name
 * @param fieldName - name of remove field
 */
export const removeSaveValue = (fieldName: string): void =>
  localStorage.removeItem(fieldName);
/**
 * Save data to storage if element is checkbox or radiobutton
 * @param type - type of checked input element
 * @param checkedInputName - name of form list element
 * @param inputValue - value what add if type is radio
 */
export const saveCheckedInput = (
  type: CheckedInputType,
  checkedInputName: string,
  inputValue: string = ""
) => {
  const saveValue: string =
    type === "checkbox" ? getCheckboxListValue(checkedInputName) : inputValue;
  saveValueToStorage(checkedInputName, saveValue);
};
