import React from "react";
import BurgerButton from "../BurgerButton/BurgerButton";
import HeaderNavLinks from "../HeaderNavLinks/HeaderNavLinks";

function HeaderNavLogin(props) {
  const { goToProfile, isMenuOpen, handleMenuOpen } = props;

  return (
    <nav className="">
      {/* Is Login */}
      <BurgerButton isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />
      <HeaderNavLinks goToProfile={goToProfile} isMenuOpen={isMenuOpen} />
    </nav>
  );
}

export default HeaderNavLogin;
