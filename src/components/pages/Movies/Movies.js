import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

function Movies(props) {
  const { loggedIn } = props;
  return (
    <>
      <Header loggedIn={loggedIn} />
      <div>Movies</div>
      <Footer />
    </>
  );
}

export default Movies;
