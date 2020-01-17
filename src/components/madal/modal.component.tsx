import React from 'react';

interface Props {
  handleClick: () => void;
  modalText: string;
}

const Modal: React.FC<Props> = ({ handleClick, modalText }) => {
  return (
    <div className="modal">
      <form className="modal__form" onSubmit={() => handleClick()}>
        <p className="modal__text">
          {modalText}
        </p>
        <div className="modal__button-panel">
          <button className="modal__agree" type="submit">
            Да
          </button>
          <button className="modal__cancle">Нет</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
