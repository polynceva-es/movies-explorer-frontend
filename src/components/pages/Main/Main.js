import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

function Main(props) {
  const { loggedIn } = props;
  return (
    <>
      <Header loggedIn={loggedIn} />
      <Footer />
    </>
  );
}

export default Main;
