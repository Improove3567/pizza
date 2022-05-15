import css from './Nav.module.css'
import Modal_basket from '../../components/modal_basket/Modal_basket'
import { useState } from "react";

function Nav({active, setActive, card}) {
    
    return (
        <div className={css.container}>
            <div className={css.nav_block}>
                <span className={css.link}>Пицца</span>
                <span className={css.link}>Комбо</span>
                <span className={css.link}>Закуски</span>
                <span className={css.link}>Десерты</span>
                <span className={css.link}>Напитки</span>
                <span className={css.link}>Другие товары</span>
                <span className={css.link}>Акции</span>
                <span className={css.link}>Контакты</span>
                <span className={css.link}>О нас</span>
                <span className={css.link}>Прямой эфир</span>
            </div>
            <div className="btn">
                <button className={css.button} onClick={() => setActive(true)}>Корзина | {card.length}</button>
            </div>
            
        </div >
    );
}

export default Nav;