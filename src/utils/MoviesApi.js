const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(res.json());
  }
  return res.json();
}

export function getMovies() {
  return fetch (`${BASE_URL}/`, {
    method: 'GET'
  })
  .then(res => getResponseData(res))
  .then(res=> {
    const moviesList = JSON.stringify(res);
    localStorage.setItem('moviesList', moviesList);
    return res;
  })
}