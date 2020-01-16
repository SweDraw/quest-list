import './Quset.style.scss';

import React from 'react';
import { FormContext, useForm } from 'react-hook-form';

import Quest, { QuestProps } from '../quest/Quest.componet';

export interface QuestFormProps {
  questParameter: QuestProps[];
}

const submite = (data: any) => {
  console.log(data);
};

const QuestForm: React.FC<QuestFormProps> = ({ questParameter }) => {
  const QuestList = questParameter.map((quest, index) => (
    <Quest key={index} {...quest} />
  ));
  const formMethods = useForm();

  return (
    <FormContext {...formMethods}>
      <form className="quest-form" onSubmit={formMethods.handleSubmit(submite)}>
        {QuestList}
      </form>
    </FormContext>
  );
};

export default QuestForm;
