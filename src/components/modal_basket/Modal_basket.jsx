import React from 'react';
import css from './Modal_basket.module.css'
import Nothing from '../modal_content/Nothing';
import BasketOrder from '../basketOrder/basketOrder';

const ModalBasket = ({ modal, setModal, card }) => {
    return (
        <div className={css.modal} onClick={() => setModal(false)}>
            <div className={css.modal_content} onClick={e => e.stopPropagation()}>


                {
                    card.length ?
                        <div className={css.order_container}>
                            <h2 className={css.main_price_counter}>1 товар на 599 сом</h2>
                            {
                                card.map((el) => (
                                    <BasketOrder
                                        title={el.title}
                                        price={el.price}
                                        description={el.description}
                                        key={el.key}

                                    />
                                ))
                            }

                            <div className={css.order_footer}>
                                <div className={css.text_container}>
                                    <span className={css.footer_text}>1 товар</span>
                                    <span className={css.footer_price}>599 сом</span>
                                    <hr className={css.hr}></hr>
                                    <span className={css.footer_text}>Сумма заказа</span>
                                    <span className={css.footer_price}>599 сом</span>
                                </div>
                                <div className={css.order_btn_container}>
                                    <button className={css.order_btn}>Оформить заказ</button>
                                </div>

                            </div>
                        </div>
                        : <Nothing modal={modal} setModal={setModal} />

                }

            </div>

        </div>
    );
}

export default ModalBasket;
