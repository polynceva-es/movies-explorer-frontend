import React from "react";
import { REG_NAME, REG_EMAIL } from "../utils/RegexConst";

function useValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState(false);

  function onChange(evt) {
    let errorMessage = evt.target.validationMessage;
    const { name, type, checked } = evt.target;

    let { value } = evt.target;
    if(type === "checkbox") {
      value = checked;
    }
    if (errorMessage === "") {
      let isInputValid;
      if(name === "name" && value !== undefined ) {
        isInputValid = value.match(REG_NAME);
        if(!isInputValid) {
          errorMessage = "Поле должно содержать только латиницу, кирилицу, пробел или дефис";
        }
      } else if (name === "email" && value !== undefined ) {
        isInputValid = value.match(REG_EMAIL);
        if(!isInputValid) {
          errorMessage = "Не валидный адрес электронной почты";
        }
      }
    }

    const newValues = {...values, [name]: value};
    const newErrors = {...errors, [name]: errorMessage};
    const formValid = evt.target.closest('form').checkValidity();
    setIsFormValid(formValid);
    setValues(newValues);
    setErrors(newErrors);
  }

  function resetValidation(values = {}, errors = {}) {
    setValues(values);
    setErrors(errors);
  }

  return {
    values,
    errors,
    onChange,
    resetValidation,
    isFormValid,
    setIsFormValid,
    setValues
  };
}

export default useValidation;
