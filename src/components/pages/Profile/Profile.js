import React from "react";
import Header from "../../Header/Header";

function Profile(props) {
  const { loggedIn } = props;
  return (
    <>
      <Header loggedIn={loggedIn} />
      <div>Profile</div>
    </>
  );
}

export default Profile;
