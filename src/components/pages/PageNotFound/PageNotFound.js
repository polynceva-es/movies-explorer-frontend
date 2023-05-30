import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
    <div className="not-found">
      <h1 className="not-found__text not-found__text_title">404</h1>
      <p className="not-found__text not-found__text_subtitle">
        Страница не найдена
      </p>
      <button onClick={goBack} className="not-found__button not-found__text">
        Назад
      </button>
    </div>
  );
}

export default PageNotFound;
