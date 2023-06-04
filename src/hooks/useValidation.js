import React from "react";

function useValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState(false);

  function onChange(evt) {
    const errorMessage = evt.target.validationMessage;
    const { name, value } = evt.target;
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
    setIsFormValid
  };
}

export default useValidation;
