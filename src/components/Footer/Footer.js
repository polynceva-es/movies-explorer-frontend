import React from "react";

function Footer() {
  return (
    <footer className="footer page__container-small">
      <p className="footer__caption">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container footer__container_between footer__container_column-reverse">
        <p className="footer__text footer__text_mobile">&copy;&nbsp;{new Date().getFullYear()}</p>
        <span className="footer__container footer__container_end">
          <p className="footer__text">Яндекс.Практикум</p>
          <p className="footer__text">Github</p>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
