import React from "react";
import Header from "../../Header/Header";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";
import useValidation from "../../../hooks/useValidation";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

function Profile(props) {
  const {
    values,
    errors,
    onChange,
    resetValidation,
    isFormValid,
    setIsFormValid,
  } = useValidation();
  const currentUser = React.useContext(CurrentUserContext);
  const {
    loggedIn,
    isMenuOpen,
    handleMenuOpen,
    goToProfile,
    goToLogin,
    signOut,
    errorMessage,
    setErrorMessage,
    onSubmitUpdateUserInfo,
    margin,
  } = props;

  const buttonSubmitClassName =
    `profile__btn ` + (!isFormValid ? "profile__btn_disable" : "");

  React.useEffect(() => {
    resetValidation(
      { name: currentUser.name, email: currentUser.email },
      { name: "", email: "" }
    );
    setIsFormValid(false);
  }, [currentUser]);

  React.useEffect(()=> {
    setErrorMessage("");
  }, [])

  function handleSubmitUpdateUserInfo(evt) {
    evt.preventDefault();
    onSubmitUpdateUserInfo({ name: values.name, email: values.email });
    resetValidation();
  }

  function handleOnChange(evt) {
    onChange(evt);
    const currentValue = { ...values };
    const { name, value } = evt.target;
    currentValue[name] = value;
    if (
      currentUser.name === currentValue.name &&
      currentUser.email === currentValue.email
    ) {
      setIsFormValid(false);
    }
  }

  return (
    <>
      <BurgerMenu
        isMenuOpen={isMenuOpen}
        handleMenuOpen={handleMenuOpen}
        goToProfile={goToProfile}
      />
      <Header
        loggedIn={loggedIn}
        isMenuOpen={isMenuOpen}
        handleMenuOpen={handleMenuOpen}
        goToProfile={goToProfile}
        goToLogin={goToLogin}
        margin={margin}
      />
      <main className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form className="profile__form" onSubmit={handleSubmitUpdateUserInfo}>
          <label htmlFor="profile-name" className="profile__label">
            <span className="profile__container">
              <span className="profile__span">Имя</span>
              <input
                className="profile__input"
                id="profile-name"
                name="name"
                type="text"
                onChange={handleOnChange}
                value={values.name || ""}
                required
              />
            </span>
            <span className="profile__input-error">{errors.name}</span>
          </label>
          <label htmlFor="profile-email" className="profile__label">
            <span className="profile__container">
              <span className="profile__span">E-mail</span>
              <input
                className="profile__input"
                id="profile-email"
                name="email"
                type="email"
                onChange={handleOnChange}
                value={values.email || ""}
                required
              />
            </span>
            <span className="profile__input-error">{errors.email}</span>
          </label>
          <span className="profile__input-error">{errorMessage}</span>
          <button className={buttonSubmitClassName} disabled={!isFormValid}>Редактировать</button>
        </form>
        <button className="profile__btn profile__btn_logout" onClick={signOut}>
          Выйти из аккаунта
        </button>
      </main>
    </>
  );
}

export default Profile;
