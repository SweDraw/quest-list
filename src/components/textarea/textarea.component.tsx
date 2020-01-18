import './textarea.style.scss';

import React from 'react';
import { useFormContext } from 'react-hook-form';

import { getSaveValue, saveValueToStorage } from '../../utils/localStorage';

type Props = {
  //* Form name
  formTextAreaName: string;
};
/**
 * Create TextArea component
 */
const TextArea: React.FC<Props> = ({ formTextAreaName }) => {
  const { register } = useFormContext();
  return (
    <textarea
      defaultValue={getSaveValue(formTextAreaName)}
      onChange={e => {
        // todo textare value after reload not changes
        saveValueToStorage(formTextAreaName, e.target.value);
      }}
      className="textarea"
      ref={register}
      name={formTextAreaName}
    />
  );
};

export default TextArea;
