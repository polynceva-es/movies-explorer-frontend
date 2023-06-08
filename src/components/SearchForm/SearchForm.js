import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
  function handleSearch(evt) {
    evt.preventDefault();
    console.log("search");
  }
  return (
    <section className="search-form">
      <form>
        <div className="search-form__container">
          <input className="search-form__input" placeholder="Фильм"></input>
          <button
            className="search-form__submit-btn"
            type="submit"
            onClick={handleSearch}
          >
            Найти
          </button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
