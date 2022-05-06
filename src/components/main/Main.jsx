import React from 'react';
import css from './Main.module.css'
import PizzaCard from "../../components/pizza_card/PizzaCard";


const Main = (props) => {

    console.log(props);
    return (
        <div className={css.container}>
            {
                props.pizzas.map((item) => <PizzaCard key={props.id}
                    {...item}
                />)
            }
        </div>
    );
}

export default Main;
