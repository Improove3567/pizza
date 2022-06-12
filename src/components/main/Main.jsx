import React from 'react';
import css from './Main.module.css'
import PizzaCard from "../../components/pizza_card/PizzaCard";
import { useState } from "react";
import { useSelector } from 'react-redux';

const Main = () => {
    const reduxPizzas = useSelector((state) => state.pizzas.data)
    return (
        <div className={css.container}>
            {
                reduxPizzas.length ?
                reduxPizzas.map((item) => <PizzaCard
                    key={item.id}
                    {...item}

                />):
                <h2 className='water_text'>Пока нет пицц</h2>
            }
        </div>
    );
}

export default Main;
