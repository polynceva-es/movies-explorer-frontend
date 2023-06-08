import React from "react";
import Header from "../../Header/Header";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";

function Profile(props) {
  const {
    loggedIn,
    isMenuOpen,
    handleMenuOpen,
    goToProfile,
    goToLogin,
    margin,
  } = props;
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
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form">
          <label htmlFor="profile-name" className="profile__label">
            <span className="profile__container">
              <span className="profile__span">Имя</span>
              <input
                className="profile__input"
                id="profile-name"
                name="name"
                type="text"
                defaultValue="Виталий"
                required
              />
            </span>
            <span className="profile__input-error"></span>
          </label>
          <label htmlFor="profile-email" className="profile__label">
            <span className="profile__container">
              <span className="profile__span">E-mail</span>
              <input
                className="profile__input"
                id="profile-email"
                name="email"
                type="text"
                defaultValue="pochta@yandex.ru"
                required
              />
            </span>
            <span className="profile__input-error"></span>
          </label>
          <span className="profile__input-error">
            При обновлении профиля произошла ошибка.
          </span>
          <button className="profile__btn">Редактировать</button>
        </form>
        <button className="profile__btn profile__btn_logout">
          Выйти из аккаунта
        </button>
      </main>
    </>
  );
}

export default Profile;
