import React from "react";

const NavBar = ({ SignOut }) => {
  return (
    <div className="NavBarSection">
      <div className="NavBarFlex">
        <div className="NavBarLogo h1">Maran</div>
        <div className="SignOutBtn">
          <button onClick={SignOut}>SignOut</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
