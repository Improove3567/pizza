import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderInfo from "../../components/slider info/SliderInfo";
import css from './HomePage.module.css'
import Order from '../../components/order/Order'
import Banner from "../../components/banner/Banner";
import PizzaCard from "../../components/pizza_card/PizzaCard";
import Main from "../../components/main/Main";

function HomePage() {

  return (
    <div className="container">
      <div className={css.wrapper}>
        <SliderInfo />
      </div>
      <div className={css.order_block}>
        <span className={css.main_slider_text}>Часто заказывают</span>
        <Order />
      </div>
      <div className="container">
        <Banner />
      </div>
      <h1 className={css.main_text}>Пицца</h1>
      <div className={css.pizza_block}>
        <Main />

      </div>
    </div >
  )
}

export default HomePage;