import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
  const { values, onChange, isFormValid, onSubmitSearch } = props;
  const buttonSearchClassName =
    `search-form__submit-btn ` +
    (!isFormValid ? "search-form__submit-btn_disable" : "");

  function handleSearch(evt) {
    evt.preventDefault();
    onSubmitSearch(values);
  }

  React.useEffect(() => {
    if (values.film) {
      onSubmitSearch(values);
    }
  }, [values.shortFilm]);

  return (
    <section className="search-form">
      <form onSubmit={handleSearch}>
        <div className="search-form__container">
          <input
            className="search-form__input"
            name="film"
            value={values.film || ""}
            placeholder="Фильм"
            onChange={onChange}
            required
          ></input>
          <button
            className={buttonSearchClassName}
            type="submit"
            disabled={!isFormValid}
          >
            Найти
          </button>
        </div>
        <FilterCheckbox onChange={onChange} onSubmitSearch={onSubmitSearch} isFormValid={isFormValid} values={values}/>
      </form>
    </section>
  );
}

export default SearchForm;
