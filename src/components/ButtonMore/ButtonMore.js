import React from "react";

function ButtonMore(props) {
  const {handleClickMore} = props
  return <button className="btn-more" onClick={handleClickMore}>Еще</button>;
}

export default ButtonMore;
