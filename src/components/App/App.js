import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "../pages/Main/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import Movies from "../pages/Movies/Movies";
import SavedMovies from "../pages/SavedMovies/SavedMovies";
import PageNotFound from "../pages/PageNotFound/PageNotFound"


function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Main loggedIn={loggedIn}/> }
        />
        <Route path="/signin" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route
          path="/profile"
          element={<Profile loggedIn={loggedIn}/>}
        />
        <Route
          path="/movies"
          element={<Movies loggedIn={loggedIn}/>}
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies loggedIn={loggedIn}/> }
        />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  );
}

export default App;
