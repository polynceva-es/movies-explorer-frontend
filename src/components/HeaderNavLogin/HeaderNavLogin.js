import React from "react";
import { NavLink } from "react-router-dom";
import profileLogo from "../../images/icon__COLOR_icon-main.svg";

function HeaderNavLogin(props) {
  const { goToProfile } = props;
  const navLinkClassName = ({ isActive }) =>
    `nav-login__nav-link ${isActive ? "nav-login__nav-link_active" : ""}`;

  return (
    <nav>
      {/* Is Login */}
      <ul className="nav-login__list">
        <li className="nav-login__list-item">
          <NavLink to="/movies" className={navLinkClassName}>
            Фильмы
          </NavLink>
        </li>
        <li className="nav-login__list-item">
          <NavLink to="/saved-movies" className={navLinkClassName}>
            Сохраненные фильмы
          </NavLink>
        </li>
        <li className="nav-login__list-item">
          <button onClick={goToProfile} className="nav-login__btn-profile">
            <img
              src={profileLogo}
              alt="Аккаунт"
              className="nav-login__btn-profile-img"
            />
            <span className="nav-login__btn-text nav-login__btn-text_profile">
              Аккаунт
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavLogin;
