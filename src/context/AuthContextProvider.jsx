/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../configs/firebase.config";
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (user, displayName, photoURL) => {
    return updateProfile(user, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        const userDetails = { email: currentUser.email };
        console.log(userDetails);
        // axiosSecure
        //   .post("/jwt", userDetails)
        //   .then((data) => {
        //     console.log(data.data?.message);
        //   })
        //   .catch((err) => console.log(err));
      }
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    createUserWithEmail,
    signInWithGoogle,
    loginWithEmail,
    logOutUser,
    updateUserProfile,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
