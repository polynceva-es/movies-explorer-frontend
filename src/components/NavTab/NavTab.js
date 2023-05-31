import React from "react";
import { HashLink as Link } from "react-router-hash-link";
{/* <Link to="/pathLink#yourAnchorTag">Your link text</Link> */}
{/* <div id= "yourAnchorTag">
      <p>Linked to here<p>
</div> */}
// import { navigate } from '@reach/router';
// navigate('#some-link');
function NavTab() {
  return (
    <ul className="navtab">
      <li className="navtab__item"><a className="navtab__link" href="#about-project">О проекте</a></li>
      <li className="navtab__item"><a className="navtab__link" href="#technologi">Технологии</a></li>
      <li className="navtab__item"><a className="navtab__link" href="#about-student">Студент</a></li>
    </ul>
  );
}

export default NavTab;
