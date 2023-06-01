import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import SearchForm from "../../SearchForm/SearchForm";

function SavedMovies(props) {
  const { loggedIn } = props;
  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <div>SavedMovies</div>
      <Footer />
    </>
  );
}

export default SavedMovies;
