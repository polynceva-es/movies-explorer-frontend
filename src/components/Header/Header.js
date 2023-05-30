import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import profileLogo from "../../images/icon__COLOR_icon-main.svg";

function Header(props) {
  const { loggedIn } = props;
  const navigate = useNavigate();
  const navLinkClassName = ({ isActive }) =>
    `header__nav-link ${isActive ? "header__nav-link_active" : ""}`;
  function goToProfile() {
    navigate("/profile");
  }
  function goToMain() {
    navigate("/");
  }
  function goToLogin() {
    navigate("/signin");
  }
  return (
    <header className="header">
      <button onClick={goToMain} className="header__btn-logo">
        <img className="header__logo" src={logo} alt="Логотип" />
      </button>

      {loggedIn ? (
        <nav>
          {/* Is Login */}
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink to="/movies" className={navLinkClassName}>
                Фильмы
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/saved-movies" className={navLinkClassName}>
                Сохраненные фильмы
              </NavLink>
            </li>
            <li className="header__nav-item">
              <button onClick={goToProfile} className="header__btn-profile">
                <img
                  src={profileLogo}
                  alt="Аккаунт"
                  className="header__btn-profile-img"
                />
                <span className="header__btn-text header__btn-text_profile">
                  Аккаунт
                </span>
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          {/* Not Login */}
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink
                to="/signup"
                className="header__nav-link header__nav-link_active header__nav-link_login"
              >
                Регистрация
              </NavLink>
            </li>
            <li className="header__nav-item">
              <button onClick={goToLogin} className="header__btn-login">
                <span className="header__btn-text header__btn-text_login">
                  Войти
                </span>
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
