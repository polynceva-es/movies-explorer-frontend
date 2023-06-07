import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";

function HeaderLogo() {
  const navigate = useNavigate();
  function goToMain() {
    navigate("/");
  }
  return (
    <button onClick={goToMain} className="logo-btn">
      <img className="logo-btn__logo" src={logo} alt="Логотип" />
    </button>
  );
}

export default HeaderLogo;
