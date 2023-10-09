import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {onAuthStateChanged } from "firebase/auth";
import {signInWithPopup, } from "firebase/auth";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(true);

//   create user 
    const createUser = (email,password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
    }
//    signIn User 
  
      const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
      }
// signIn with Google 
   const googleSignIn  = () =>{
    setLoading(true);
     return signInWithPopup(auth,googleProvider);
   }
//  signOut user start 
    const LogOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

//  authStateChange start 
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser);
        setLoading(false);
        console.log('observer is active',currentUser);
    })
    return ()=>{
        unSubscribe();
    }
  },[])



    const AuthInfo = {
        user,
        createUser,
        signInUser,
        LogOut,
        loading,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}