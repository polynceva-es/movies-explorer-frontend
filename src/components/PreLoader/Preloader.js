import React from 'react';

function Preloader(props) {
  const { isLoader } = props;
  const preloaderClassName = `preloader ${isLoader ? "preloader_active" : ""}`
    return (
        <div className={preloaderClassName}>
            <div className="preloader__container">
                <span className="preloader__round"/>
            </div>
        </div>
    )
};

export default Preloader
