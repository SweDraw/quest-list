export interface Input {
  name: string;
  register: any;
}

export type InputList = Input & {
  answerList: string[];
};
