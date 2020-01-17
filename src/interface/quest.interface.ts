//* Type of all answer what can use
export type AnswerType = CheckedInputType | "select" | "textarea";
//* Type of all answer elment input with checket type answer
export type CheckedInputType = "radio" | "checkbox";

//*  Parameter what get fron answer element from server
export interface AnswerParameter {
  type: AnswerType;
  answerList?: string[];
  right_answer_numbers: number[];
}
//* Parameter from quest element from server
export interface Quest {
  quest: string;
  answer: AnswerParameter;
}
