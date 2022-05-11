import React from 'react';
import css from './Nothing.module.css'

const Nothing = ({modal, setModal}) => {
    return (
        <div className={css.container}>
            <img src='https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg'
            alt='be'></img>
            <h2 className={css.main_text}>Ой пусто!</h2>
            <h4 className={css.description}>Ваша корзина пуста, откройте «Меню»
                и выберите понравившийся товар.
                Мы доставим ваш заказ от 365 сом</h4>
                <button className={css.btn} onClick={() => setModal(false)}>Вернуться в меню</button>
        </div>
    );
}

export default Nothing;
