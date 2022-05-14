import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderInfo from "../../components/slider info/SliderInfo";
import css from './HomePage.module.css'
import Order from '../../components/order/Order'
import Banner from "../../components/banner/Banner";
import Main from "../../components/main/Main";
import Modal_basket from '../../components/modal_basket/Modal_basket'
import { useState } from "react";

function HomePage(props) {

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
        <Main pizzas={props.pizzas} handleSend={props.handleSend}/>


      </div>
      
    </div >
  )
}

export default HomePage;