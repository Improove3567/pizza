import React from "react";
import css from "./Modal_basket.module.css";
import Nothing from "../modal_content/Nothing";
import BasketOrder from "../basketOrder/basketOrder";
import OrderModal from "../orderModal/OrderModal";
import Order from "../order/Order";
import { useState } from "react";

const ModalBasket = ({ modal, setModal, card, removeCardBasket, price }) => {
  const [join, setJoin] = useState(false);
  const totalBalance = card.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <div className={css.modal} onClick={() => setModal(false)}>
      <div className={css.modal_content} onClick={(e) => e.stopPropagation()}>
        {card.length ? (
          <div className={css.order_container}>
            <h2 className={css.main_price_counter}>
              {card.length} товар на {totalBalance} сом
            </h2>
            
            <div className={css.list}>
              {card.map((el) => (
                <BasketOrder
                  title={el.title}
                  price={el.price}
                  description={el.description}
                  id={el.id}
                  removeCardBasket={removeCardBasket}
                />
              ))}
            </div>

            <div className={css.order_footer}>
              <div className={css.text_container}>
                <span className={css.footer_text}>
                  {card.length} товар на {totalBalance}сом
                </span>
                <span className={css.footer_price}> {totalBalance} сом</span>
                <hr className={css.hr}></hr>
                <span className={css.footer_text}>Сумма заказа</span>
                <span className={css.footer_price}> {totalBalance} сом</span>
              </div>
              <div className={css.order_btn_container}>
                <button className={css.order_btn} onClick={() => setJoin(true)}>
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Nothing modal={modal} setModal={setModal} />
        )}
        {join ? <OrderModal setJoin={setJoin} /> : ""}
      </div>
    </div>
  );
};

export default ModalBasket;
