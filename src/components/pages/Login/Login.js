import React from "react";
import Form from "../../Form/Form";
import FormCaption from "../../FormCaption/FormCaption";

function Login() {
  return (
    <section className="login">
      <Form
        title="Рады видеть!"
        children={
          <>
            <label className="form">
              <label htmlFor="#reg-email" className="form__label">
                E-mail
              </label>
              <input
                className="form__input"
                id="reg-email"
                name="email"
                type="email"
              />
              <span className="form__input-error"></span>
            </label>
            <label className="form">
              <label htmlFor="#reg-pass" className="form__label">
                Пароль
              </label>
              <input
                className="form__input"
                id="reg-pass"
                name="password"
                type="password"
              />
              <span className="form__input-error"></span>
            </label>
          </>
        }
        labelSubmit="Войти"
        param="log"
      />
      <FormCaption
        text="Ещё не зарегистрированы?"
        to="/signup"
        linkText="Регистрация"
      />
    </section>
  );
}

export default Login;
