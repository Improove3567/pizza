import css from "./Order.module.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InfoCard from "../InfoCard/InfoCard";
import OrderCard from "../order_card/Order_card";

function Order() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="s">
      <div className={css.order_block}>
        <Slider {...settings}>
          <div>
            <OrderCard />
          </div>
          <div>
            <div className="order_card_block">
              <img
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/a1ddf6a09d0b4442b2bc52db4ca66ac7_146x146.jpeg"
                alt="failed"
                className="order_card_img"
              ></img>
              <p className="order_card_p">Бруслетики</p>
            </div>
          </div>
          <div>
            <div className="order_card_block">
              <img
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/aa24adaceff241b0a2eb292b7c677526_146x146.jpeg"
                alt="failed"
                className="order_card_img_pizzas"
              ></img>
              <p className="order_card_p">Мексиканская</p>
            </div>
          </div>
          <div>
            <div className="order_card_block">
              <img
                src="https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/71c35ea3d38847e28cd6de4cbcde7d31_146x146.webp"
                alt="failed"
                className="order_card_img"
              ></img>
              <p className="order_card_p">2 пиццы</p>
            </div>
          </div>
          <div>
            <div className="order_card_block">
              <img
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/f502b32926af4951aa5e3802c4c8e91a_146x146.jpeg"
                alt="failed"
                className="order_card_img_pizzas"
              ></img>
              <p className="order_card_p">Пеперони</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Order;
{
  /* <div className='container'>
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
        </div> */
}
