import './input.style.scss';

import React from 'react';
import { useFormContext } from 'react-hook-form';

import { CheckedInputType } from '../../interface/quest.interface';
import { isChecked } from '../../utils/form-check';
import { getSaveValue, saveCheckedInput } from '../../utils/localStorage';

interface Props {
  // *  Name what set in form to submite data
  formName: string;
  // * Input element type
  inputType: CheckedInputType;
  // * Inner text in elment
  innerText: string;
  // * Value what return elemenet form form
  value: string;
}
/**
 * Create checkbox or radio button element with save select value to store
 */
const CheckedInput: React.FC<Props> = ({
  formName,
  inputType,
  innerText,
  value
}) => {
  const { register } = useFormContext();
  const beforeValue: string | undefined = getSaveValue(formName);
  const isDefaultChecked = isChecked(inputType, beforeValue, value);
  const handleChange = () => {
    saveCheckedInput(inputType, formName, value);
  };
  return (
    <label className="input">
      <input
        className="input__field"
        ref={register}
        type={inputType}
        name={formName}
        value={value}
        defaultChecked={isDefaultChecked}
        onChange={handleChange}
      />
      <span className="input__text">{innerText}</span>
    </label>
  );
};

export default CheckedInput;
