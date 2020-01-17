import { QuestProps } from '../components/quest/Quest.componet';
import { removeSaveValue } from './localStorage';
import { createQuestFieldName } from './quest';

export const handleReset = (questList: QuestProps[]): Record<string, any> => {
  const resetValue: Record<string, any> = {};
  questList.forEach((quest, index) => {
    const name: string = createQuestFieldName(index + 1);
    // * if answer is checkbox set default value empty array else empty string
    resetValue[name] =
      quest.answerParameter.answerType === "checkbox" ? [] : "";
    // * remove saved field
    removeSaveValue(name);
  });
  return resetValue;
};

export const getCheckboxListValue = (checkboxFormName: string) => {
  const checkboxes: NodeListOf<HTMLInputElement> = document.getElementsByName(
    checkboxFormName
  ) as NodeListOf<HTMLInputElement>;
  const checkedList: string[] = [];
  checkboxes.forEach(({ checked, value }) => {
    if (checked) checkedList.push(value);
  });
  return checkedList.join(",");
};
