import React from "react";
import { useDispatch } from "react-redux";
import Api from "../../api/Api";
import css from "./PizzaCard.module.css";
import { setPizzaBasketActionCreator } from "../../redux/Actions/actions";
const PizzaCard = ({
  title,
  id,
  price,
  description,
  image,
  card,
  setCard,
  handleSend,
  isAdmin,
  ...props
}) => {
  const onDelete = () =>{
    // api.delete(`pizza/${id}`)
    Api.deletePizza(id)
    .then(() =>{
      alert('Пицца успешно удалена')
      window.location.reload()
    })

  }
const dispatch = useDispatch();
const data = { title, price, description, image, id }


const addToBasket = () =>{
  dispatch(setPizzaBasketActionCreator(data))
  // dispatch({ type: "SET_PIZZA_TO_LOCAL_STORAGE", payload: data });
}
  return (
    <div className={css.pizza_block}>
      <div className={css.content}>
        <img
          src="http://i.otzovik.com/objects/b/780000/773681.png"
          alt="failed"
          className={css.pizza_img}
        ></img>
        <div className={css.description}>
          <h3 className={css.title}>{title}</h3>
          <span className={css.info}>{description}</span>
        </div>
      </div>
      <div className={css.footer}>
        <span className={css.footer_text}> от {price} сом</span>
        {isAdmin ? (
          <div className={css.dashboard_btns}>
            <button className={css.dashboard_btn_change}>Изменить</button>
            <button className={css.dashboard_btn_delete} onClick={onDelete}>Удалить</button>
          </div>
        ) : (
          <button
            className={css.footer_btn}
            onClick={addToBasket}
          >Добавить</button>
        )}
        
      </div>
    </div>
  );
};

export default PizzaCard;
