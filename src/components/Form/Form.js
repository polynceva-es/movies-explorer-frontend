import React from "react";
import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";

function Form(props) {
  const { param, title, children, labelSubmit, isFormValid, onSubmit, errorMessage } = props;
  const buttonSubmitClassName =
    `form__btn-submit ` +
    (!isFormValid ? "form__btn-submit_disable" : "");
  const submitErrorClassName = `form__input-error form__input-error_server + form__input-error_${param}`;

  return (
    <div className="form">
      <HeaderLogo />
      <h2 className="form__title">{title}</h2>
      <form
        className="form__container"
        name={title}
        onSubmit={onSubmit}
        action="#"
      >
        {children}
        <span className={submitErrorClassName}>{errorMessage}</span>
        <button
          className={buttonSubmitClassName}
          type="submit"
          aria-label={labelSubmit}
          disabled={!isFormValid}
        >
          {labelSubmit}
        </button>
      </form>
    </div>
  );
}

export default Form;
