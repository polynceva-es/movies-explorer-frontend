import React from "react";
import Header from "../../Header/Header";

function Profile(props) {
  const { loggedIn } = props;
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="profile">
        <h1>Привет, Виталий!</h1>

        <button className="profile__btn">Редактировать</button>
        <button className="profile__btn profile__btn_logout">Выйти из аккаунта</button>
      </main>
    </>
  );
}

export default Profile;
