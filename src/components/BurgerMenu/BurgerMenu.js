import React from "react";
import HeaderNavLinks from "../HeaderNavLinks/HeaderNavLinks";
import BurgerButton from "../BurgerButton/BurgerButton";

function BurgerMenu(props) {
  const { goToProfile, isMenuOpen } = props;
  return (
    <div className="menu">
      <div className="menu__container">
        <BurgerButton />
        <HeaderNavLinks goToProfile={goToProfile} isMenuOpen={isMenuOpen} />
      </div>
    </div>
  );
}

export default BurgerMenu;
