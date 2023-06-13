import React from "react";

function ButtonDelete(props) {
  const {handleClickLikedToggle} = props;
  return <button className="btn-delete movie-card__btn" onClick={handleClickLikedToggle}></button>;
}

export default ButtonDelete;
