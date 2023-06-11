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
import {
  login,
  register,
  checkToken, //Сделать проверку наличия токена в localStorage при запуске приложения
  getUserInfo,
  updateUserInfo,
} from "../../utils/MainApi";
import { getMovies } from "../../utils/MoviesApi";

function App() {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isLoader, setIsLoader] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [regedIn, setRegedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const navigate = useNavigate();

  function tokenCheck() {
    setIsLoader(true);
    const jwt = localStorage.getItem("token");
    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          setCurrentUser(res);
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log("Ошибка:" + err);
          localStorage.removeItem("token");
          setLoggedIn(false);
        })
        .finally(() => setIsLoader(false));
    }
  }

  React.useEffect(() => {
    tokenCheck();
    if (loggedIn) {
      setIsLoader(true);
      const movies = JSON.parse(localStorage.getItem("moviesList"));
      if(!movies) {
        getMovies()
        .then((res) => {
          const moviesFromLocalStorage = JSON.parse(localStorage.getItem("moviesList"));
          setMovies(moviesFromLocalStorage);
        })
        .catch((err) => {
          setErrorMessage(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        })
        .finally(() => setIsLoader(false));
      } else {
        setMovies(movies);
      }
    }
  }, []);

  function handleMenuOpen() {
    setIsMenuOpen(!isMenuOpen);
  }
  function goToProfile() {
    navigate("/profile");
    handleMenuOpen();
  }
  function goToLogin() {
    navigate("/signin");
  }

  function onSubmitLogin(values, timeout) {
    login(values)
      .then(() => {
        const jwt = localStorage.getItem("token");
        getUserInfo(jwt)
          .then((res) => {
            setCurrentUser(res);
            setLoggedIn(true);
            if (timeout) {
              setTimeout(() => {
                navigate("/movies");
              }, timeout);
            } else {
              navigate("/movies");
            }
          })
          .catch(() => {
            setErrorMessage("На сервере произошла ошибка");
          });
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
        setErrorMessage(
          "Регистрация прошла успешно. Вы будете перенаправлены на другую страницу"
        );
        onSubmitLogin(values, 2000);
      })
      .catch((err) => {
        err.then((e) => setErrorMessage(e.message));
        setRegedIn(false);
      });
  }

  function signOut() {
    setLoggedIn(false);
    localStorage.removeItem("token");
    setCurrentUser({});
    navigate("/");
  }

  function onSubmitUpdateUserInfo(values) {
    const jwt = localStorage.getItem("token");
    updateUserInfo(values, jwt)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
            <Login
              onSubmitLogin={onSubmitLogin}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Register
              onSubmitRegister={onSubmitRegister}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
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
              setErrorMessage={setErrorMessage}
              onSubmitUpdateUserInfo={onSubmitUpdateUserInfo}
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
              movies={movies}
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
