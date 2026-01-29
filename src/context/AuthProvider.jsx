import React, { useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser);
        
    })
    return ()=>{
      unSubcribe();
    }
    },[])
    const authInfo={
          createUser,
          signInUser,
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;