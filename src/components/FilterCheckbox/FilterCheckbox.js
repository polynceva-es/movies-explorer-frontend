import React from "react";

function FilterCheckbox(props) {
  const { values, onChange, isFormValid, onSubmitSearch } = props;
  function handleCheckboxChange(evt) {
    evt.preventDefault();
    onChange(evt);
    if (isFormValid && values.film) {
      const newValues={...values}
      newValues.shortFilm = evt.target.checked;
      onSubmitSearch(newValues);
    }
  }
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__switch">
        <input
          id="check-box"
          type="checkbox"
          name="shortFilm"
          checked={values.shortFilm ?? false}
          onChange={handleCheckboxChange}
          pattern=""
        />
        <span className="filter-checkbox__slider" />
      </label>
      <label htmlFor="check-box" className="filter-checkbox__label">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
