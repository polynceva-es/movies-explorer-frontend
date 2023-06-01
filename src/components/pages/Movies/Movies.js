import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import SearchForm from "../../SearchForm/SearchForm";

function Movies(props) {
  const { loggedIn } = props;
  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <div>Movies</div>
      <Footer />
    </>
  );
}

export default Movies;
