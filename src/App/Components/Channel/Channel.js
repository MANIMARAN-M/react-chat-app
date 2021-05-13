import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import Message from "../Message";

const Channel = ({ user = null }) => {
  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const db = firebase.firestore();
  const { uid, displayName, photoURL } = user;
  useEffect(() => {
    if (db) {
      const unsubscribe = db
        .collection("messages")
        .orderBy("CreatedAt")
        .limit(100)
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setMessage(data);
        });
      return unsubscribe;
    }
  }, [db]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (newMessage.length === 0) {
      alert("Write somthing");
    } else {
      if (db) {
        db.collection("messages").add({
          text: newMessage,
          CreatedAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          displayName,
          photoURL,
        });
        setNewMessage("");
      }
    }
  };

  return (
    <div className="ChannelSection" data-testid="Channel-1">
      <div className="ChannelScroll">
        <div className="ChannelWel p">Welcome to firechat 🎉</div>
        <div>
          {message.map((message) => (
            <Message key={message.id} {...message} />
          ))}
        </div>
      </div>
      <div className="MessageType">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Text here..."
            required
          />
          <button type="submit" data-testid="send">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Channel;
