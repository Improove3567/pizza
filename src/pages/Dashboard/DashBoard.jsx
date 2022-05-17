import React from "react";
import css from "./DashBoard.module.css";
import Header from "../../components/header/Header";
import PizzaCard from "../../components/pizza_card/PizzaCard";

const DashBoard = ({ pizzas, ...props }) => {
  return (
    <div className={css.DashBoard}>
      <div className={css.pizzas_container}>
        {pizzas.map((item) => (
          <PizzaCard  key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
