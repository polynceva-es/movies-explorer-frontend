import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size";
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
  checkToken,
  getUserInfo,
  updateUserInfo,
  getSaveMovies,
  postSaveMovie,
  deleteSaveMovie,
} from "../../utils/MainApi";
import { getMovies } from "../../utils/MoviesApi";

function App() {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isLoader, setIsLoader] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [regedIn, setRegedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // const [movies, setMovies] = React.useState([]);
  const [filterMoviesList, setFilterMoviesList] = React.useState([]);
  const [numberLastFilm, setNumberLastFilm] = React.useState(undefined);
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);

  const navigate = useNavigate();
  const windowWidth = useWindowWidth();

  function onClickLiked(movie, isLiked, setIsLiked) {
    const jwt = localStorage.getItem("token");
    // const isMovieSaved = savedMovies.some((item) => item.movieId === movie.id);
    if (jwt) {
      if (isLiked) {
        deleteSaveMovie(movie.movieID, jwt)
          .then((res) => setIsLiked(false))
          .catch((err) => console.log(`Ошибка: ${err}`));
      } else if (!isLiked) {
        postSaveMovie(movie, jwt)
          .then((res) => setIsLiked(true))
          .catch((err) => console.log(`Ошибка: ${err}`));
      }
    } else {
      setLoggedIn(false);
    }
  }

  React.useEffect(()=> {
    if(loggedIn) {
      getSaveMovies()
        .then(res => setSavedMoviesList(res))
        .catch(err => setErrorMessage(err));
    }
  }, [loggedIn])

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
    } else {
      setLoggedIn(false);
    }
  }

  function callFunctionWithMovieList(functionWithMovieList) {
    const moviesList = JSON.parse(localStorage.getItem("moviesList"));
    if (!moviesList) {
      setIsLoader(true);
      return getMovies();

      // .then((res) => {
      //   functionWithMovieList(res);
      // })
      // .catch((err) => {
      //   setErrorMessage(
      //     "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
      //   );
      // })
      // .finally(() => setIsLoader(false));
    } else {
      functionWithMovieList(moviesList);
      // return Promise((1,2) => {acceprt(moviesList)});
    }
  }

  React.useEffect(() => {
    tokenCheck();
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
        setLoggedIn(false);
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
        setErrorMessage("Данные успешно изменены");
        setCurrentUser(res);
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  }

  function filterFilmList() {
    //promis all ( => movies and saved movies)
    callFunctionWithMovieList((movies) => {
      const filterFilmParam = JSON.parse(localStorage.getItem("filterParam"));
      let filterMovies;
      if (filterFilmParam) {
        const film = filterFilmParam.film;
        let shortFilm = filterFilmParam.shortFilm;
        shortFilm = shortFilm ?? false;
        if (shortFilm) {
          filterMovies = movies
            .filter((elem) =>
              elem.nameRU.toLowerCase().includes(film.toLowerCase())
            )
            .filter((elem) => elem.duration <= 40);
        } else {
          filterMovies = movies
            .filter((elem) =>
              elem.nameRU.toLowerCase().includes(film.toLowerCase())
            )
            .filter((elem) => elem.duration > 40);
        }
        localStorage.setItem("filterFilmList", JSON.stringify(filterMovies));
        setFilterMoviesList(filterMovies);
        setNumberLastFilm(undefined);
      } else {
        localStorage.setItem("filterFilmList", []);
        setFilterMoviesList([]);
        setNumberLastFilm(undefined);
      }
    });
  }

  function onSubmitSearch(values) {
    localStorage.setItem("filterParam", JSON.stringify(values));
    filterFilmList();
  }

  function onSubmitSaveSearch() {
    console.log('search')
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
              onSubmitSearch={onSubmitSearch}
              filterMoviesList={filterMoviesList}
              filterFilmList={filterFilmList}
              windowWidth={windowWidth}
              numberLastFilm={numberLastFilm}
              setNumberLastFilm={setNumberLastFilm}
              setFilterMoviesList={setFilterMoviesList}
              onClickLiked={onClickLiked}
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
              savedMoviesList={savedMoviesList}
              onSubmitSaveSearch={onSubmitSaveSearch}
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
