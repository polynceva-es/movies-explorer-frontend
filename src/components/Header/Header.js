import React from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderNavLogin from "../HeaderNavLogin/HeaderNavLogin";
import HeaderNavLogout from "../HeaderNavLogout/HeaderNavLogout";

function Header(props) {
  const { loggedIn, isMenuOpen, handleMenuOpen, goToProfile, goToLogin, margin } = props;
  const headerClassName = `header ${margin ? "header_margin" : ""}`
  return (
    <header className={headerClassName}>
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
