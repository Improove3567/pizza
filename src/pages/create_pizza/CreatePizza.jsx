import React from "react";
import css from "./CreatePizza.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Api, { api } from "../../api/Api";
import { useNavigate } from "react-router-dom";

const CreatePizza = ({ id, addNewPizza, ...props }) => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      price: price,
      description: description,
      image: "",
    };
    Api.createPizza(data).then((res) => {
      console.log(res);
      addNewPizza(res.data)
      navigate('/dashboard')
    });
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form onSubmit={submit} className={css.main_container}>
      <h1 className={css.main_text}>Добавление пиццы</h1>
      <div className={css.inputs_container}>
        <span className={css.span}>Название</span>
        <input type="text" className={css.input} onChange={handleTitle} />
      </div>
      <div className={css.inputs_container}>
        <span className={css.span}>Описание</span>
        <input type="text" className={css.input} onChange={handleDescription} />
      </div>
      <div className={css.price_input_container}>
        <span className={css.span}>Цена</span>
        <input type="number" className={css.input} onChange={handlePrice} />
      </div>
      <Link to="/create-pizza" className={css.add_btn_container}>
        <button className={css.add_btn}>+</button>
      </Link>
      <div>
        <button onSubmit={submit} className={css.addPizzaBtn}>Добавить</button>
      </div>
    </form>
  );
};

export default CreatePizza;
