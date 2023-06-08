import React from "react";
import { NavLink } from "react-router-dom";
import BurgerButton from "../BurgerButton/BurgerButton";
import ProfileButton from "../ProfileButton/ProfileButton";

function BurgerMenu(props) {
  const { goToProfile, isMenuOpen, handleMenuOpen } = props;
  const navLinkClassName = ({ isActive }) =>
    `menu__link ${isActive ? "menu__link_active" : ""}`;
  const menuClassName = `menu ${isMenuOpen ? "menu_open" : "" }`

  return (
    <div className={menuClassName}>
      <div className="menu__container">
        <BurgerButton isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />
        <ul className="menu__list">
          <li className="menu__item">
            <NavLink to="/" className={navLinkClassName}>
              Главная
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/movies" className={navLinkClassName}>
              Фильмы
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/saved-movies" className={navLinkClassName}>
              Сохраненные фильмы
            </NavLink>
          </li>
        </ul>
        <ProfileButton goToProfile={goToProfile} />
      </div>
    </div>
  );
}

export default BurgerMenu;
