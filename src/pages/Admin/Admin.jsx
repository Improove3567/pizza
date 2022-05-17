import React from "react";
import css from "./Admin.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Admin = () => {

    const [password, setPassword] = useState("")
    const [login, setLogin] = useState("")

    const submit = (e) => {
        e.preventDefault();
    }

    const handleEmail = (e) => {
        setLogin(e.target.value)
    }


    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

  return (
    <form onSubmit={submit}>
      <div className={css.container}>
        <div className={css.main_container}>
          <div className={css.inputs_container}>
            <input type="text" className={css.input} onChange={handleEmail}/>
            <span className={css.span}>Email</span>
          </div>
          <div className={css.inputs_container}>
            <input type="text" className={css.input} onChange={handlePassword}/>
            <span className={css.span}>Password</span>
          </div>
        </div>

        <div className={css.btn}>
          <Link to={"/"} className={css.close}>
            Close
          </Link>
          <button className={css.btn_login} type="submit">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Admin;
