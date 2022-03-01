import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const [user,setUser] = useState({});
  
  const signInUsingGoogle = () => {
    setIsLoading(true);
      return signInWithPopup(auth, googleProvider)
  }

  useEffect(()=>{
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  },[])

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({})
        setIsLoading(false)
      });
  }

  return {
    user,
    signInUsingGoogle,
    setIsLoading,
    isLoading,
    logOut,
  };

};

export default useFirebase;
