import React from "react";
import Form from "../../Form/Form";
import FormCaption from "../../FormCaption/FormCaption";

function Register() {
  return (
    <section className="register">
      <Form
        title="Добро пожаловать!"
        children={
          <>
            <label className="form">
              <label htmlFor="#reg-name" className="form__label">
                Имя
              </label>
              <input
                className="form__input"
                id="reg-name"
                name="name"
                type="text"
                required
              />
              <span className="form__input-error"></span>
            </label>
            <label className="form">
              <label htmlFor="#reg-email" className="form__label">
                E-mail
              </label>
              <input
                className="form__input"
                id="reg-email"
                name="email"
                type="email"
                required
              />
              <span className="form__input-error"></span>
            </label>
            <label className="form">
              <label htmlFor="#reg-pass" className="form__label">
                Пароль
              </label>
              <input
                className="form__input form__input_error"
                id="reg-pass"
                name="password"
                type="password"
                required
              />
              <span className="form__input-error">Что-то пошло не так...</span>
            </label>
          </>
        }
        labelSubmit="Зарегистрироваться"
        param="reg"
      />
      <FormCaption
        text="Уже зарегистрированы?"
        to="/signin"
        linkText="Войти"
      />
    </section>
  );
}

export default Register;
