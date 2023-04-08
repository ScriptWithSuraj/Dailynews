import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? setUser(res) : setUser(null);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const register = (name, email, pass) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, pass)
      .then(() => {
        return updateProfile(auth.currentUser, { displayName: name });
      })
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };
  const login = (email, pass) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, pass)
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };
  const logout = () => {
    signOut(auth);
  };
  const forgotPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const contextValue = {
    user,
    error,
    loading,
    register,
    login,
    forgotPass,
    logout,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
