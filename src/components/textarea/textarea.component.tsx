import './textarea.style.scss';

import React from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  textareaName: string;
};

const TextArea: React.FC<Props> = ({ textareaName }) => {
  const { register } = useFormContext();
  return <textarea className="textarea" ref={register} name={textareaName} />;
};

export default TextArea;
