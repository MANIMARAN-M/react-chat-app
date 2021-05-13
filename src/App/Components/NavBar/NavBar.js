import React from "react";

const NavBar = ({ SignOut }) => {
  const goFullScreen = () => {
    window.screenfull.request();
  };

  return (
    <div className="NavBarSection" data-testid="NavBar-1">
      <div className="NavBarFlex">
        <div className="NavBarLogo h1">Maran</div>
        <div className="SignOutBtn">
          <button onClick={SignOut} data-testid="signout">
            SignOut
          </button>
        </div>
        <div className="SignOutBtn">
          <button onClick={goFullScreen}>Full Screen Mode</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
