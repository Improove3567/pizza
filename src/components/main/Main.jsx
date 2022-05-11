import React from 'react';
import css from './Main.module.css'
import PizzaCard from "../../components/pizza_card/PizzaCard";
import { useState } from "react";

const Main = (props) => {
    return (
        <div className={css.container}>
            {
                props.pizzas.map((item) => <PizzaCard
                handleSend={props.handleSend}
                 key={props.id}
                    {...item}

                />)
            }
        </div>
    );
}

export default Main;
