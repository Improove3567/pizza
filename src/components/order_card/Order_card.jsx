import React from 'react';
import css from './Order_card.module.css'

const OrderCard = () => {
    return (

            <div className={css.card_block}>
                <img 
                src='https://i2.wp.com/www.thousandhills.com/wp-content/uploads/2013/10/hook-and-ladder-pizza-300x100.jpg?resize=300%2C100'
                alt='failed'
                className={css.img}
                ></img>
            </div>

    );
}

export default OrderCard;
