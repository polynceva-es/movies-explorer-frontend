import React from "react";

function BurgerButton(props) {
  const { isMenuOpen, handleMenuOpen } = props;
  const BurgerButtonClassName = `burger-button__icon ${
    isMenuOpen && "burger-button__icon_close"
  }`;
  return (
    <button className="burger-button" onClick={handleMenuOpen}>
      <span className={BurgerButtonClassName}></span>
    </button>
  );
}

export default BurgerButton;
