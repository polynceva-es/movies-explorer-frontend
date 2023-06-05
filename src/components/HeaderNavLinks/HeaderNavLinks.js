import React from "react";
import { NavLink } from "react-router-dom";
import ProfileButton from "../ProfileButton/ProfileButton";

function HeaderNavLinks(props) {
  const { goToProfile, isMenuOpen } = props;
  const navLinkClassName = ({ isActive }) =>
    `links__link ${isActive ? "links__link_active" : ""}`;
  const linksClassName = `links ${isMenuOpen ? "links_open" : ""}`;
  // const linkClassName = `links__link ${
  //   !isMenuOpen ? "links__link_disable" : ""
  // }`;

  return (
    <ul className={linksClassName}>
      {/* <li className="links__item">
        <NavLink to="/" className={linkClassName}>
          Главная
        </NavLink>
      </li> */}
      <li className="links__item">
        <NavLink to="/movies" className={navLinkClassName}>
          Фильмы
        </NavLink>
      </li>
      <li className="links__item">
        <NavLink to="/saved-movies" className={navLinkClassName}>
          Сохраненные фильмы
        </NavLink>
      </li>
      <li className="links__item">
        <ProfileButton goToProfile={goToProfile} />
      </li>
    </ul>
  );
}

export default HeaderNavLinks;
