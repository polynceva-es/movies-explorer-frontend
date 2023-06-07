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
            <label htmlFor="reg-email" className="form__label">
              E-mail
              <input
                className="form__input"
                id="reg-email"
                name="email"
                type="email"
                required
              />
              <span className="form__input-error"></span>
            </label>
            <label htmlFor="reg-pass" className="form__label">
              Пароль
              <input
                className="form__input"
                id="reg-pass"
                name="password"
                type="password"
                required
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
