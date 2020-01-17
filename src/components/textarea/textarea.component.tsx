import './textarea.style.scss';

import React from 'react';
import { useFormContext } from 'react-hook-form';

import { getSaveValue, saveValueToStorage } from '../../utils/localStorage';

type Props = {
  textareaName: string;
};

const TextArea: React.FC<Props> = ({ textareaName }) => {
  const { register } = useFormContext();
  return (
    <textarea
      value={getSaveValue(textareaName)}
      onChange={e => {
        // todo textare value after reload not changes
        saveValueToStorage(textareaName, e.target.value);
      }}
      className="textarea"
      ref={register}
      name={textareaName}
    />
  );
};

export default TextArea;
