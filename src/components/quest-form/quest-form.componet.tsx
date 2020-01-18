import './quest-form.style.scss';

import React, { useState } from 'react';
import { FormContext, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

import { handleReset } from '../../utils/form';
import { isHaveEmptyFieldForm } from '../../utils/form-check';
import Modal from '../madal/modal.component';
import Quest, { QuestProps } from '../quest/Quest.componet';

export interface QuestFormProps {
  // * List of parameter from quest what add to this form
  questParameter: QuestProps[];
}
/**
 * Crate quest form.
 * Whene not all quest was answered open modal window this agree/disagree button
 */
const QuestForm: React.FC<QuestFormProps> = ({ questParameter }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const formMethods = useForm();
  const history = useHistory();

  const goToResultPage = () => history.push("/result");

  const handleSubmite = (data: any) => {
    const isHaveEmptyField: boolean = isHaveEmptyFieldForm(data);
    setModalOpen(isHaveEmptyField);
    if (!isHaveEmptyField) {
      goToResultPage();
    }
  };
  const agreeClick = () => {
    goToResultPage();
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
        <div className="quest-form__button-panel">
          <button
            className="button button--reset"
            type="reset"
            onClick={() => formMethods.reset(handleReset(questParameter))}
          >
            Очистити
          </button>
          <button className="button button--submite" type="submit">
            Відправити
          </button>
        </div>
      </form>
      {isModalOpen && (
        <Modal
          modalText="Каждый не отвеченный ответ считается неправильным, Вы уверены что
          хотите продолжить?"
          cancleClick={() => setModalOpen(false)}
          agreeClick={() => {
            agreeClick();
            setModalOpen(false);
          }}
        />
      )}
    </FormContext>
  );
};

export default QuestForm;
