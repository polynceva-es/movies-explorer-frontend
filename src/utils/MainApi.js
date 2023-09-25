const {PUBLIC_URL} = process.env;
const BASE_URL = `${PUBLIC_URL}/api`; //my adress
const HEADERS = {'Content-Type': 'application/json'};

function getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(res.json());
    }
    return res.json();
}
export function register(values) {
  return fetch (`${BASE_URL}/signup`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({name: values.name, email: values.email, password: values.password})
  })
  .then(res=> getResponseData(res))
}

export function login(values) {
  return fetch (`${BASE_URL}/signin`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({email: values.email, password: values.password})
  })
  .then(res=> getResponseData(res))
  .then(res=> {localStorage.setItem('token', res.token)})
}

export function checkToken(jwt) {
  return fetch (`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {...HEADERS, 'Authorization': `Bearer ${jwt}`}
  })
  .then(res=> getResponseData(res))
}

export function getUserInfo(jwt) {
  return fetch (`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {...HEADERS, 'Authorization': `Bearer ${jwt}`}
  })
  .then(res=> getResponseData(res))
}

export function updateUserInfo(values, jwt) {
      return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {...HEADERS, 'Authorization': `Bearer ${jwt}`},
        body: JSON.stringify({name: values.name, email: values.email})
      })
        .then(res => getResponseData(res))
    }

export function getSaveMovies(jwt) {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {...HEADERS, 'Authorization': `Bearer ${jwt}`}
  })
  .then(res=> getResponseData(res))
}

export function postSaveMovie(movie, jwt) {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {...HEADERS, 'Authorization': `Bearer ${jwt}`},
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id
    })
  })
  .then(res=> getResponseData(res))
}

export function deleteSaveMovie(movieId, jwt) {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {...HEADERS, 'Authorization': `Bearer ${jwt}`}
  })
  .then(res=> getResponseData(res))
}