import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
const googleProvider = new GoogleAuthProvider();

  const [loading, setLoading] = useState(true);

// create User
const createUser = (email,password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
}
// signIn
const signIn =(email,password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth,email,password)
}

// logOut
const logOut = ()=>{
  setLoading(true)
  return signOut(auth)
}

// google SIgnIn
const googleSignIn = ()=>{
  setLoading(true)
  return signInWithPopup(auth,googleProvider)
}



useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser)
    console.log('current User ',currentUser);

//  get and set jwt token
if(currentUser){
  axios.post('https://bistro-boss-server-orcin.vercel.app/jwt',{email:currentUser.email})
  .then(data=>{
    // console.log(data.data.token);
    localStorage.setItem('access-token',data.data.token )
    setLoading(false)
  })
}
else{
  localStorage.removeItem('access-token')
}


  
  })
  return ()=>{
  return  unsubscribe();
  } 
},[])

const updateUserProfile= (name,photo)=>{
  return updateProfile(auth.currentUser,{
  displayName:name, photoURL:photo
})
}

  const authInfo = {
    user,
    loading,
 createUser,
 signIn,
 logOut,
 updateUserProfile,
 googleSignIn

  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
