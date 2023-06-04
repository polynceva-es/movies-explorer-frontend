import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderNavLogin from "../HeaderNavLogin/HeaderNavLogin";
import HeaderNavLogout from "../HeaderNavLogout/HeaderNavLogout";

function Header(props) {
  const { loggedIn } = props;
  const navigate = useNavigate();
  function goToProfile() {
    navigate("/profile");
  }
  function goToLogin() {
    navigate("/signin");
  }
  return (
    <header className="header page__container-small">
      <HeaderLogo />
      {loggedIn ? (
        <HeaderNavLogin goToProfile={goToProfile} />
      ) : (
        <HeaderNavLogout goToLogin={goToLogin} />
      )}
    </header>
  );
}

export default Header;
