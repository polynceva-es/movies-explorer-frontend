import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderNavLogin from "../HeaderNavLogin/HeaderNavLogin";
import HeaderNavLogout from "../HeaderNavLogout/HeaderNavLogout";

function Header(props) {
  const { loggedIn, isMenuOpen, handleMenuOpen, goToProfile, goToLogin } = props;

  return (
    <header className="header page__container-small">
      <HeaderLogo />
      {loggedIn ? (
        <HeaderNavLogin
          goToProfile={goToProfile}
          isMenuOpen={isMenuOpen}
          handleMenuOpen={handleMenuOpen}
        />
      ) : (
        <HeaderNavLogout goToLogin={goToLogin} />
      )}
    </header>
  );
}

export default Header;
