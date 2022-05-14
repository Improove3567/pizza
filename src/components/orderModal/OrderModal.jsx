import React from "react";
import ModalConfirmation from "../ModalConfirmation/ModalConfirmation";
import css from "./OrderModal.module.css";
import { useState } from "react";

const OrderModal = ({ setJoin }) => {
  const [confirmation, setConfirmation] = useState(false);
  const [inputValue, setInputValue] = useState([])

   const changeInputValue = (e) => {
     setInputValue(e.target.value)
   }

  return (
    <div className={css.modal} onClick={() => setJoin(false)}>
      <div className={css.modal_content} onClick={(e) => e.stopPropagation()}>
        <div className={css.text_container}>
          <h1 className={css.main_text}>Вход на сайт</h1>
          <p className={css.title}>
            Подарим подарок на день рождения,
            <br /> сохраним адрес доставки и расскажем об
            <br /> акциях
          </p>
        </div>
        <div className={css.input_block}>
          <p className={css.number}>Номер телефона</p>
          <input className={css.input} type="text" value={inputValue} onChange={changeInputValue} />
        </div>
        <button className={css.btn} onClick={() => setConfirmation(true)}>
          Выслать код
        </button>
      </div>
      {confirmation ? (
        <ModalConfirmation setConfirmation={setConfirmation} />
      ) : (
        ""
      )}
    </div>
  );
};

export default OrderModal;
