import './quest-form.style.scss';

import React, { useState } from 'react';
import { FormContext, useForm } from 'react-hook-form';

import { isEmptyForm } from '../../utils/form-check';
import Modal from '../madal/modal.component';
import Quest, { QuestProps } from '../quest/Quest.componet';

export interface QuestFormProps {
  questParameter: QuestProps[];
}

const QuestForm: React.FC<QuestFormProps> = ({ questParameter }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const formMethods = useForm();
  const handleSubmite = (data: any) => {
    setModalOpen(isEmptyForm(data));
  };
  const QuestList = questParameter.map((quest, index) => (
    <Quest key={index} {...quest} />
  ));

  return (
    <FormContext {...formMethods}>
      <form
        className="quest-form"
        onSubmit={formMethods.handleSubmit(handleSubmite)}
      >
        {QuestList}
        <button type="reset" onClick={() => formMethods.reset()}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
      {isModalOpen && (
        <Modal
          modalText="Каждый не отвеченный ответ считается неправильным, Вы уверены что
          хотите продолжить?"
          handleClick={() => setModalOpen(false)}
        />
      )}
    </FormContext>
  );
};

export default QuestForm;
