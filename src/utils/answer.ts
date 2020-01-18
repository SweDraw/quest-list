import { RightAnswer } from '../interface/quest.interface';
import { getEmptyStringIfElementUndefine, isEqualStringArray } from './array';

/**
 * Check user answer and right answer is equal
 * @param userAnswer - string with separate comma answers
 * @param rightAnswer - array with right answer
 */
export const isRightAnswer = (
  userAnswer: string,
  rightAnswer: string | string[]
) => {
  if (Array.isArray(rightAnswer)) {
    return isEqualStringArray(rightAnswer, userAnswer.split(",")); //rightAnswer.every(answer => answerList.includes(answer));
  } else {
    return Object.is(userAnswer, rightAnswer);
  }
};

/**
 * Get right answer from answer string array
 * @param rightAnser - list of number of right answer in answer list or string
 * @param answersList - array with answers what used if rightAnswer is number or number array of answer what is right
 */
export const getRightAnswerList = (
  rightAnser: RightAnswer,
  answersList?: string[] | string
): string[] | string => {
  if (answersList === undefined)
    return !Array.isArray(rightAnser) ? rightAnser.toString() : "";
  if (typeof rightAnser === "string") return rightAnser;

  if (Array.isArray(rightAnser)) {
    return Array.isArray(answersList)
      ? rightAnser.map(rightIndex =>
          getEmptyStringIfElementUndefine(answersList[rightIndex])
        )
      : "";
  } else if (Array.isArray(answersList)) {
    return getEmptyStringIfElementUndefine(answersList[rightAnser]);
  } else {
    return "";
  }
};
