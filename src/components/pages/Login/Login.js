import React from "react";
import { Navigate } from "react-router-dom";
import Form from "../../Form/Form";
import FormCaption from "../../FormCaption/FormCaption";
import useValidation from "../../../hooks/useValidation";

function Login(props) {
  const { values, errors, onChange, resetValidation, isFormValid } = useValidation();
  const { loggedIn, onSubmitLogin, errorMessage, setErrorMessage } = props;

  React.useEffect(() => {
    setErrorMessage('');
    resetValidation({ email: "", password: "" });
  }, []);

    if(loggedIn) {
      return <Navigate to='/movies' replace />;
    }

  function handleSubmitLogin(evt) {
    evt.preventDefault();
    onSubmitLogin(values);
  }

  function getInputClassName(param) {
    const inputClassName = `form__input ` + (errors[param] ? "form__input_error" : "");
    return inputClassName;
  }

  return (
    <section className="login">
      <Form
        title="Рады видеть!"
        labelSubmit="Войти"
        param="log"
        onSubmit={handleSubmitLogin}
        isFormValid={isFormValid}
        errorMessage={errorMessage}
        children={
          <>
            <label htmlFor="reg-email" className="form__label">
              E-mail
              <input
                className={getInputClassName('email')}
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
                className={getInputClassName('password')}
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
      <FormCaption
        text="Ещё не зарегистрированы?"
        to="/signup"
        linkText="Регистрация"
      />
    </section>
  );
}

export default Login;
