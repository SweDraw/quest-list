import { QuestProps } from '../components/quest/Quest.componet';
import { AnswerType } from '../interface/quest.interface';
import { removeSaveValue, saveValueToStorage } from './localStorage';
import { createQuestFieldName } from './quest';

type HTMLInput = NodeListOf<HTMLInputElement>;

export const handleReset = (questList: QuestProps[]): Record<string, any> => {
  const resetValue: Record<string, any> = {};
  questList.forEach(({ answerParameter }, index) => {
    const name: string = createQuestFieldName(index + 1);
    const type: AnswerType = answerParameter.answerType;

    resetValue[name] = "";
    if (type === "select") {
      const value: string = answerParameter.answerList
        ? answerParameter.answerList[0]
        : "";
      saveValueToStorage(name, value);
    } else removeSaveValue(name);
  });
  return resetValue;
};

export const getCheckboxListValue = (checkboxFormName: string) => {
  const checkboxes: HTMLInput = document.getElementsByName(
    checkboxFormName
  ) as HTMLInput;
  const checkedList: string[] = [];
  checkboxes.forEach(({ checked, value }) => {
    if (checked) checkedList.push(value);
  });
  return checkedList.join(",");
};
