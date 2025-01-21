import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import auth from "../Firebase/Firebase.config.js";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";

export const AuthContaxt = createContext(null);

const AuthProvider = ({ children }) => {
  // create user
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = { registerUser,logIn };

  return (
    <div>
      <AuthContaxt.Provider value={authInfo}> {children}</AuthContaxt.Provider>
    </div>
  );
};

export default AuthProvider;
