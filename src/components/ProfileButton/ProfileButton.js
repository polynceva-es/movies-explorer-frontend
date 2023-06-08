import React from "react";
import profileLogo from "../../images/icon__COLOR_icon-main.svg";

function ProfileButton(props) {
  const { goToProfile } = props;
  return (
    <button onClick={goToProfile} className="profile-btn">
      <img
        src={profileLogo}
        alt="Аккаунт"
        className="profile-btn__img"
      />
      <span className="profile-btn__text profile-btn__text_profile">
        Аккаунт
      </span>
    </button>
  );
}

export default ProfileButton;
