import React from "react";
import Header from "../../Header/Header";

function Profile(props) {
  const { loggedIn } = props;
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form">
          <label className="profile__label">
            <div className="profile__label-container">
              <label for="#name" className="profile__input-label">
                Имя
              </label>
              <input
                className="profile__input"
                id="name"
                name="name"
                type="text"
                value="Виталий"
              />
            </div>
            <span className="profile__input-error"></span>
          </label>
          <label className="profile__label">
            <div className="profile__label-container">
              <label for="#email" className="profile__input-label">
                E-mail
              </label>
              <input
                className="profile__input"
                id="email"
                name="email"
                type="text"
                value="pochta@yandex.ru"
              />
            </div>
            <span className="profile__input-error"></span>
          </label>
          <span className="profile__input-error"></span>
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
