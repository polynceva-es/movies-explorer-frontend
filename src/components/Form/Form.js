import React from "react";
import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";

function Form(props) {
  const buttonSubmitClassName = `form__btn-submit form__btn-submit_${props.param}`
  return(
<div className="form form__container">
<HeaderLogo />
  <h2 className="form__title">{props.title}</h2>
  <form className="form">
    {props.children}
    <button className={buttonSubmitClassName}>
      {props.labelSubmit}
    </button>
  </form>
</div>
  )
}

export default Form;