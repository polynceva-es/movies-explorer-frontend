import React from "react";
import { Link } from "react-router-dom";

function FormCaption(props) {
  return (
    <article className="form-caption">
      <h3 className="form-caption__text">{props.text}</h3>
      <Link to={props.to} className="form-caption__text form-caption__text_link">{props.linkText}</Link>
    </article>
  );
}
export default FormCaption;
