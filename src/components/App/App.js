import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "../pages/Main/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import Movies from "../pages/Movies/Movies";
import SavedMovies from "../pages/SavedMovies/SavedMovies";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import { login, register, checkToken } from "../../utils/MainApi";

function App() {
  const userContext = React.useContext(CurrentUserContext);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [regedIn, setRegedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  function handleMenuOpen() {
    setIsMenuOpen(!isMenuOpen);
  }

  const navigate = useNavigate();
  function goToProfile() {
    navigate("/profile");
    handleMenuOpen();
  }
  function goToLogin() {
    navigate("/signin");
  }

  function onSubmitLogin(values) {
    login(values)
      .then(() => {
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        err.then((e) => setErrorMessage(e.message));
        setRegedIn(false);
      });
  }

  function onSubmitRegister(values) {
    register(values)
      .then(() => {
        setRegedIn(true);
        setErrorMessage('Регистрация прошла успешно. Вы будете перенаправлены на другую страницу');
        //onSubmitLogin...
        login(values)
          .then(() => {
            setLoggedIn(true);
            setTimeout(()=> {navigate("/movies")}, 3000);
          })
          .catch(()=> setErrorMessage('На сервере произошла ошибка'));
      })
      .catch((err) => {
        err.then((e) => setErrorMessage(e.message));
        setRegedIn(false);
      });
  }

  function signOut() {
    setLoggedIn(false);
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <CurrentUserContext.Provider value={userContext}>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              loggedIn={loggedIn}
              isMenuOpen={isMenuOpen}
              handleMenuOpen={handleMenuOpen}
              goToProfile={goToProfile}
              goToLogin={goToLogin}
              margin={true}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Login onSubmitLogin={onSubmitLogin} errorMessage={errorMessage} />
          }
        />
        <Route
          path="/signup"
          element={
            <Register
              onSubmitRegister={onSubmitRegister}
              errorMessage={errorMessage}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              element={Profile}
              loggedIn={loggedIn}
              isMenuOpen={isMenuOpen}
              handleMenuOpen={handleMenuOpen}
              goToProfile={goToProfile}
              goToLogin={goToLogin}
              signOut={signOut}
              currentUser={currentUser}
              errorMessage={errorMessage}
              margin={false}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute
              element={Movies}
              loggedIn={loggedIn}
              isMenuOpen={isMenuOpen}
              handleMenuOpen={handleMenuOpen}
              goToProfile={goToProfile}
              goToLogin={goToLogin}
              margin={false}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              element={SavedMovies}
              loggedIn={loggedIn}
              isMenuOpen={isMenuOpen}
              handleMenuOpen={handleMenuOpen}
              goToProfile={goToProfile}
              goToLogin={goToLogin}
              margin={false}
            />
          }
        />
        <Route path="*" element={<ProtectedRoute element={PageNotFound} />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
