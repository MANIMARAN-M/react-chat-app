import React from "react";
import Button from "./Button";
import Google from "../../Images/google.png";
import Chat from "../../Images/chat.svg";

const HomePage = ({ signInWithGoogle }) => {
  return (
    <div className="HomeSection">
      <div>
        <div className="HomeChatImage">
          <div className="ChannelWel p">Welcome to firechat 🎉</div>
          <img src={Chat} alt="" />
        </div>
        <div onClick={signInWithGoogle} className="SignUpGoogle">
          <img src={Google} alt="google" />
          <div className="small">Sign up with Google</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
