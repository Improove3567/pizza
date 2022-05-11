import React from 'react';
import css from './basketOrder.module.css'

const BasketOrder = ({ card, title, description, price }) => {
    console.log(card)
    return (

            <div className={css.order}>
                <div className={css.order_content}>
                    <img src='http://i.otzovik.com/objects/b/780000/773681.png' alt='bebe'
                        className={css.img}
                        width='100px'
                        height='100px'
                    />
                    <div className={css.order_text}>
                        <h3 className={css.title}>{title}</h3>
                        <span className={css.span}>{description}</span>
                    </div>

                </div>
                <hr className={css.hr}></hr>
                <div className={css.price_block}>
                    <span className={css.order_price}>{price} сом</span>
                    <div className={css.counter}></div>
                </div>
            </div>

            

    );
}

export default BasketOrder;