import React from 'react';
import css from './Main.module.css'
import PizzaCard from "../../components/pizza_card/PizzaCard";
import { useEffect, useState } from "react";

const Main = () => {
    const [pizza, setPizza] = useState([]);

    useEffect(() => {
        fetch('https://62697c31f2c0cdabac0f400a.mockapi.io/pizza')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPizza(data)
            })
    }, [])

    return (
        <div className={css.container}>
            {
                pizza.map((item) => <PizzaCard
                    id={item.id}
                    title={item.title}
                    descripption={item.description}
                    image={item.image}
                    price={item.price}
                />)
            }
        </div>
    );
}

export default Main;
