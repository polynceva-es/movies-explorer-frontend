import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

function SavedMovies(props) {
  const { loggedIn } = props;
  return (
    <>
      <Header loggedIn={loggedIn} />
      <div>SavedMovies</div>
      <Footer />
    </>
  );
}

export default SavedMovies;
