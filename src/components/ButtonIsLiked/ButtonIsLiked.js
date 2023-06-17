import React from "react";

function ButtonIsLiked(props) {
  const {handleClickLikedToggle} = props;
  return <button className="btn-liked movie-card__btn" onClick={handleClickLikedToggle}/>;
}

export default ButtonIsLiked;
