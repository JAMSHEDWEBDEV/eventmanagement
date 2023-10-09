import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext(null);
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
        loading
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