/**
 * Check is equal to string array
 * @param firstArray - first array what what checked
 * @param secondArray - second array what checked
 */
export const isEqualStringArray = (
  firstArray: string[],
  secondArray: string[]
) => {
  if (firstArray.length !== secondArray.length) return false;
  firstArray = firstArray.map(answer => answer.trim());
  secondArray = secondArray.map(answer => answer.trim());
  return firstArray.every(answer => secondArray.includes(answer));
};

export const getEmptyStringIfElementUndefine = (element: any) =>
  element !== undefined ? element : "";
