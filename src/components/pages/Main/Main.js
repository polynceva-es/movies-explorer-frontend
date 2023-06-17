import React from "react";
import Header from "../../Header/Header";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";
import MainContent from "../../MainContent/MainContent";
import Footer from "../../Footer/Footer";

function Main(props) {
  const {
    loggedIn,
    isMenuOpen,
    handleMenuOpen,
    goToProfile,
    goToLogin,
    margin,
  } = props;
  return (
    <>
      <BurgerMenu
        isMenuOpen={isMenuOpen}
        handleMenuOpen={handleMenuOpen}
        goToProfile={goToProfile}
      />
      <Header
        loggedIn={loggedIn}
        isMenuOpen={isMenuOpen}
        handleMenuOpen={handleMenuOpen}
        goToProfile={goToProfile}
        goToLogin={goToLogin}
        margin={margin}
      />
      <MainContent />
      <Footer />
    </>
  );
}

export default Main;
