import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function NavTab() {
    return (
    <ul className="navtab">
      <li className="navtab__item">
        <Link
          className="navtab__link"
          to="/#about-project"
        >
          О проекте
        </Link>
      </li>
      <li className="navtab__item">
        <Link
          className="navtab__link"
          to="/#technologi"
        >
          Технологии
        </Link>
      </li>
      <li className="navtab__item">
        <Link
          className="navtab__link"
          to="/#about-me"
        >
          Студент
        </Link>
      </li>
    </ul>
  );
}

export default NavTab;
