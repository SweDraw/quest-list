import './modal.style.scss';

import React from 'react';

interface Props {
  //* What happen after click to agree
  agreeClick: () => void;
  //* What happen after click to disagree
  cancleClick: () => void;
  //* Text in center of modal window
  modalText: string;
}

/**
 * Create modal window
 */
const Modal: React.FC<Props> = ({ agreeClick, modalText, cancleClick }) => {
  return (
    <section className="modal">
      <div className="modal__container">
        <p className="modal__text">{modalText}</p>
        <div className="modal__button-panel">
          <button
            className="modal__agree button button--submite"
            onClick={() => agreeClick()}
          >
            Да
          </button>
          <button
            className="modal__cancle button button--cancle"
            onClick={() => cancleClick()}
          >
            Нет
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
