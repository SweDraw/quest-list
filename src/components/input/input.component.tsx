import './input.style.scss';

import React from 'react';
import { useFormContext } from 'react-hook-form';

import { InputType } from '../../interface/quest.interface';

export type InputField = {
  text: string;
};
type Props = InputField & {
  name: string;
  type: InputType;
};

const Input: React.FC<Props> = ({ name, type, text }) => {
  const { register } = useFormContext();
  return (
    <label className="input">
      <input
        className="input__field"
        ref={register}
        type={type}
        name={name}
        value={text}
      />
      <span className="input__text">{text}</span>
    </label>
  );
};

export default Input;
