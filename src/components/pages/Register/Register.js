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
            <label className="form form__container">
              <label for="#reg-name" className="form__label">
                Имя
              </label>
              <input
                className="form__input"
                id="reg-name"
                name="name"
                type="text"
              />
              <span className="form__input-error"></span>
            </label>
            <label className="form form__container">
              <label for="#reg-email" className="form__label">
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
            <label className="form form__container">
              <label for="#reg-pass" className="form__label">
                Пароль
              </label>
              <input
                className="form__input form__input_error"
                id="reg-pass"
                name="password"
                type="password"
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
