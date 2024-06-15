import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext=createContext();
const auth=getAuth(app)
const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({children}) {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email, password)=>{
       setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
    });
    return()=>{
        return unsubscribe()
    }
  },[])

const login=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)

}
const logOut=()=>{
return signOut(auth)
}
  const loginWithGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }

    const authInfo={
        createUser,
        user,
        loginWithGoogle,
        loading,
        login,
        logOut
    }
      
  return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
  )
}
