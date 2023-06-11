import React from "react";

function FilterCheckbox(props) {
const {values, onChange} = props;
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__switch">
        <input id="check-box" type="checkbox" name="shortFilm"
            defaultChecked={values.shortFilm} onChange={onChange} pattern=""/>
        <span className="filter-checkbox__slider"/>
      </label>
      <label htmlFor="check-box" className="filter-checkbox__label">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
