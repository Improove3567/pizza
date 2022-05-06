import React from 'react';
import css from './Nothing.module.css'

const Nothing = () => {
    return (
        <div className={css.container}>
            <h2 className={css.main_text}>Ой пусто!</h2>
            <h4 className={css.description}>Ваша корзина пуста, откройте «Меню»
                и выберите понравившийся товар.
                Мы доставим ваш заказ от 365 сом</h4>
                <button className={css.btn}>Вернуться в меню</button>
        </div>
    );
}

export default Nothing;
