import React from "react";
import Header from "../../Header/Header";
import MainContent from "../../MainContent/MainContent";
import Footer from "../../Footer/Footer";

function Main(props) {
  const { loggedIn, isMenuOpen, handleMenuOpen, goToProfile, goToLogin, margin } =
    props;
  return (
    <>
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
