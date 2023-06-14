import React from "react";
import { Navigate } from "react-router-dom";
import Form from "../../Form/Form";
import FormCaption from "../../FormCaption/FormCaption";
import useValidation from "../../../hooks/useValidation";

function Register(props) {
  const { values, errors, onChange, resetValidation, isFormValid } =
    useValidation();
  const {
    loggedIn,
    onSubmitRegister,
    errorMessage,
    setErrorMessage,
  } = props;

  React.useEffect(() => {
    setErrorMessage("");
    resetValidation({ name: "", email: "", password: "" });
  }, []);

  if (loggedIn) {
    return <Navigate to='/movies' replace />;
  }

  function handleSubmitRegister(evt) {
    evt.preventDefault();
    onSubmitRegister(values);
  }

  function getInputClassName(param) {
    const inputClassName =
      `form__input ` + (errors[param] ? "form__input_error" : "");
    return inputClassName;
  }

  return (
    <section className="register">
      <Form
        title="Добро пожаловать!"
        labelSubmit="Зарегистрироваться"
        param="reg"
        onSubmit={handleSubmitRegister}
        isFormValid={isFormValid}
        errorMessage={errorMessage}
        children={
          <>
            <label htmlFor="reg-name" className="form__label">
              Имя
              <input
                className={getInputClassName("name")}
                id="reg-name"
                name="name"
                type="text"
                onChange={onChange}
                value={values.name || ""}
                minLength="2"
                maxLength="30"
                required
              />
              <span className="form__input-error">{errors.name || ""}</span>
            </label>

            <label htmlFor="reg-email" className="form__label">
              E-mail
              <input
                className={getInputClassName("email")}
                id="reg-email"
                name="email"
                type="email"
                onChange={onChange}
                value={values.email || ""}
                minLength="2"
                maxLength="30"
                required
              />
              <span className="form__input-error">{errors.email || ""}</span>
            </label>

            <label htmlFor="reg-pass" className="form__label">
              Пароль
              <input
                className={getInputClassName("password")}
                id="reg-pass"
                name="password"
                type="password"
                onChange={onChange}
                value={values.password || ""}
                required
              />
              <span className="form__input-error">{errors.password || ""}</span>
            </label>
          </>
        }
      />
      <FormCaption text="Уже зарегистрированы?" to="/signin" linkText="Войти" />
    </section>
  );
}

export default Register;
