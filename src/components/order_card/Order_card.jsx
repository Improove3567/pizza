import React from "react";
import css from "./Order_card.module.css";

const OrderCard = () => {
  return (
    <div className={css.order_card_block}>
      <img
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/0bd7315279e34250b85f45c2526c1b65_138x138.jpeg"
        alt="failed"
        className={css.order_card_img}
      ></img>
      <p className={css.order_card_p}>Додстер</p>

    </div>
  );
};

export default OrderCard;
