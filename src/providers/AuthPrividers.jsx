import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const signinGoogle = new GoogleAuthProvider();

const AuthPrividers = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth)
    }
    const signinWithGoogle  = () =>{
        return signInWithPopup(auth, signinGoogle)
    }



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change', currentUser);
            setUser(currentUser);
            setLoading(false)
        });

        return () =>{
            unsubscribe();
        }

    },[])

    const authInfo = {
        user, createUser, signIn, logOut, loading, signinWithGoogle
    }
    // const user = {displayName: 'Sagor Nodi'}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPrividers;