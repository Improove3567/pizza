import React from "react";
import css from "./basketOrder.module.css";
import { useDispatch } from "react-redux";
import { deletePizzaBasketActionCreator } from "../../redux/Actions/actions";

const BasketOrder = ({
  card,
  title,
  description,
  price,
  id,
}) => {
  const dispatch = useDispatch()

  const onDeleteFromBasket = () =>{
      dispatch(deletePizzaBasketActionCreator(id));
  }
  return (
    <div className={css.order}>
      <div className={css.order_content}>
        <img
          src="http://i.otzovik.com/objects/b/780000/773681.png"
          alt="bebe"
          className={css.img}
          width="80px"
          height="80px"
        />
        <div className={css.order_text}>
          <h3 className={css.title}>{title}</h3>
          <span className={css.span}>{description}</span>
        </div>
      </div>
      <hr className={css.hr}></hr>
      <div className={css.price_block}>
        <span className={css.order_price}>{price} сом</span>
        <div className={css.remover} onClick={onDeleteFromBasket}>
          Удалить
        </div>
      </div>
    </div>
  );
};

export default BasketOrder;
