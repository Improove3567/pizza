import React from 'react';
import css from './Modal_basket.module.css'
import Nothing from '../modal_content/Nothing';

const ModalBasket = ({ modal, setModal }) => {
    return (
        <div className={css.modal} onClick={() => setModal(false)}>
            <div className={css.modal_content} onClick={e => e.stopPropagation()}>
                <div className={css.container}>
                    <h2 className={css.main_text}>Ой пусто!</h2>
                    <h4 className={css.description}>Ваша корзина пуста, откройте «Меню»
                        и выберите понравившийся товар.
                        Мы доставим ваш заказ от 365 сом</h4>
                    <button className={css.btn} onClick={() => setModal(false)}>Вернуться в меню</button>
                </div>
            </div>

        </div>
    );
}

export default ModalBasket;
