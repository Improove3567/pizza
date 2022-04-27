import css from './Order.module.css'
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InfoCard from "../InfoCard/InfoCard";
import OrderCard from '../order_card/Order_card';

function Order() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    }
    return (
        <div className='s'>
            <div className={css.order_block}>
                <Slider {...settings}>
                    <div>
                        <OrderCard />
                    </div>
                    <div>
                        <OrderCard />
                    </div>
                    <div>
                        <OrderCard />
                    </div>
                    <div>
                        <OrderCard />
                    </div>
                    <div>
                        <OrderCard />
                    </div>
                    <div>
                        <OrderCard />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Order;
{/* <div className='container'>
            <div className={css.order_block}>
                <span className={css.main_text}>Часто заказывают</span>
                <div className={css.products}>
                    <div className={css.card}>Пеперони</div>
                    <div className={css.card}>2 пиццы</div>
                    <div className={css.card}>Мексиканская</div>
                    <div className={css.card}>Додстер</div>
                    <div className={css.card}>Бруслетики, 16 шт</div>
                </div>
            </div>
        </div> */}