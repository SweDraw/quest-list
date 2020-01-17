import './input.style.scss';

import React from 'react';
import { useFormContext } from 'react-hook-form';

import { CheckedInputType } from '../../interface/quest.interface';
import { isChecked } from '../../utils/form-check';
import { getSaveValue, saveCheckedInput, saveValueToStorage } from '../../utils/localStorage';

interface Props {
  name: string;
  type: CheckedInputType;
  text: string;
  value: string;
}

const CheckedInput: React.FC<Props> = ({ name, type, text, value }) => {
  const { register } = useFormContext();
  return (
    <label className="input">
      <input
        className="input__field"
        ref={register}
        type={type}
        name={name}
        value={value}
        defaultChecked={isChecked(type, name, value)}
        onChange={() => saveCheckedInput(type, name, value)}
      />
      <span className="input__text">{text}</span>
    </label>
  );
};

export default CheckedInput;
