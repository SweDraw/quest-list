export type AnswerType = CheckedInputType | "select" | "textarea";
export type CheckedInputType = "radio" | "checkbox";

export interface AnswerParameter {
  type: AnswerType;
  answerList?: string[];
  right_answer_numbers: number[];
}

export interface Quest {
  quest: string;
  answer: AnswerParameter;
}
