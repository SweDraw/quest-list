import { CheckedInputType } from '../interface/quest.interface';
import { getCheckboxListValue } from './form';

export const getSaveValue = (fieldName: string): string | undefined =>
  localStorage.getItem(fieldName)?.toString();

export const saveValueToStorage = (
  fieldName: string,
  newValue: string | string[]
) => localStorage.setItem(fieldName, newValue.toString());

export const removeSaveValue = (fieldName: string) =>
  localStorage.removeItem(fieldName);

export const saveCheckedInput = (
  type: CheckedInputType,
  checkedInputName: string,
  inputValue: string = ""
) => {
  const saveValue: string =
    type === "checkbox" ? getCheckboxListValue(checkedInputName) : inputValue;
  saveValueToStorage(checkedInputName, saveValue);
};
