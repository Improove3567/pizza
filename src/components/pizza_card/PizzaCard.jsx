import React from "react";
import css from "./PizzaCard.module.css";

const PizzaCard = ({
  title,
  id,
  price,
  description,
  image,
  card,
  setCard,
  handleSend,
  ...props
}) => {
  return (
    <div className={css.pizza_block}>
      <img
        src="http://i.otzovik.com/objects/b/780000/773681.png"
        alt="failed"
        className={css.pizza_img}
      ></img>
      <div className={css.description}>
        <h3 className={css.title}>{title}</h3>
        <span className={css.info}>{description}</span>
      </div>
      <div className={css.footer}>
        <span className={css.footer_text}> от {price} сом</span>
        <div className={css.btn_container}>
          <button
            className={css.footer_btn}
            onClick={() => {
              handleSend({ title, price, description, image, id });
            }}
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
