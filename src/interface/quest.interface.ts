export type AnswerType = InputType | "select" | "textarea";
export type InputType = "radio" | "checkbox";

export interface AnswerParameter {
  type: AnswerType;
  answerList?: string[];
  right_answer_numbers: number[];
}

export interface Quest {
  quest: string;
  answer: AnswerParameter;
}
