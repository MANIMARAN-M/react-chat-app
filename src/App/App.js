import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Channel from "./Components/Channel/Channel";
import NavBar from "./Components/NavBar/NavBar";
import "./styles/style.css";
import HomePage from "./Components/HomePage/HomePage";

firebase.initializeApp({
  apiKey: "AIzaSyBfF0AiQXSLGaovgdVpS05eyWfMbtd_LiI",
  authDomain: "reactchatapp0.firebaseapp.com",
  projectId: "reactchatapp0",
  storageBucket: "reactchatapp0.appspot.com",
  messagingSenderId: "814343878053",
  appId: "1:814343878053:web:57089f41866ea11f79644c",
});

const auth = firebase.auth();
const db = firebase.db;

function App() {
  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    if (initializing) {
      setInitializing(false);
    }
    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    const provoider = new firebase.auth.GoogleAuthProvider();
    auth.useDeviceLanguage();
    try {
      await auth.signInWithPopup(provoider);
    } catch (error) {
      console.log(error);
    }
  };
  if (initializing) return "Loding...";
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="MainApp">
      {user ? (
        <>
          <NavBar SignOut={signOut} />
          <Channel user={user} db={db} />
        </>
      ) : (
        <HomePage signInWithGoogle={signInWithGoogle} />
      )}
    </div>
  );
}

export default App;
