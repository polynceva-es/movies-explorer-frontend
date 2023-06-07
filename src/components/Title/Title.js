import React from "react";

function Title(props) {
  return <h2 className="title" id={props.id}>{props.title}</h2>;
}

export default Title;
