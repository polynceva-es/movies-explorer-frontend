import React from "react";

function Footer() {
  return (
    <footer className="page footer">
      <div className="footer__line">
        <p className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <div className="footer__container">
        <p className="footer__text">&copy; {new Date().getFullYear()}</p>
        <div className="footer__container2">
          <p className="footer__text">Яндекс.Практикум</p>
          <p className="footer__text">Github</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
