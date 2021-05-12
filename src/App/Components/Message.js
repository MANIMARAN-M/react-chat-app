import React from "react";
import { formatRelative } from "date-fns";

const Message = ({
  CreatedAt = null,
  text = "",
  displayName = "",
  photoURL = "",
}) => {
  return (
    <div className="MessageSection">
      <div className="MessageImgFlex">
        <div className="MessageImg">
          {photoURL ? <img src={photoURL} alt="Avatar" /> : null}
        </div>
        <div className="MessageWritter">
          {displayName ? <p>{displayName}</p> : null}
          <div className="MessageTime">
            {CreatedAt?.seconds ? (
              <span>
                {formatRelative(new Date(CreatedAt.seconds * 1000), new Date())}
              </span>
            ) : null}
          </div>
        </div>
      </div>

      <div className="Messagetext p">{text}</div>
    </div>
  );
};

export default Message;
