import React from "react";
import Header from "../../Header/Header";
import MainContent from "../../MainContent/MainContent";
import Footer from "../../Footer/Footer";

function Main(props) {
  const { loggedIn } = props;
  return (
    <>
      <Header loggedIn={loggedIn} />
      <MainContent />
      <Footer />
    </>
  );
}

export default Main;
