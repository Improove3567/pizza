import React from "react";
import css from "./DashBoard.module.css";
import PizzaCard from "../../components/pizza_card/PizzaCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutActionCreator } from "../../redux/Actions/actions";
const DashBoard = () => {
  const reduxPizzas = useSelector((state) => state.pizzas.data)
  const dispatch = useDispatch()

    const logout = () =>{
      dispatch(logoutActionCreator())

    }

    

  return (
    <div className={css.DashBoard}>
      <Link to="/create-pizza" className={css.add_btn_container}>
        <button className={css.add_btn}>+</button>
      </Link>
        <button onClick={logout} className={css.close_btn}>Выйти</button>
      <div className={css.pizzas_container}>
        {reduxPizzas.map((item) => (
          <PizzaCard isAdmin={true} key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
