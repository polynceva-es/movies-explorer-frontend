import React from "react";
import { NavLink } from "react-router-dom";

function HeaderNavLogout(props) {
  const { goToLogin } = props;
  return (
    <nav className="nav-logout">
      {/* Not Login */}
      <ul className="nav-logout__list">
        <li className="nav-logout__list-item">
          <NavLink
            to="/signup"
            className="nav-logout__nav-link nav-logout__nav-link_active nav-logout__nav-link_login"
          >
            Регистрация
          </NavLink>
        </li>
        <li className="nav-logout__list-item">
          <button onClick={goToLogin} className="nav-logout__btn-login">
            <span className="nav-logout__btn-text nav-logout__btn-text_login">
              Войти
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavLogout;
