import React from "react";

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__switch">
        <input id="check-box" type="checkbox"/>
        <span className="filter-checkbox__slider"/>
      </label>
      <label for="check-box" className="filter-checkbox__label">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
