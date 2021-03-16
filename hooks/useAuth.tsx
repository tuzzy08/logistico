import { useState, useEffect, createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import firebase from '../config/firebase'


// custom hook that manages login and logout
function useAuth() {
  // create an instance of the google provider object
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().useDeviceLanguage()
  const router = useRouter()
  // Sign In with Google
  const signInWithGoogle = async () => {
  //  firebase.auth().signInWithRedirect(provider)
  //   if (typeof window !== 'undefined') {
  //       router.push('/admin')
  //     }
    

  firebase.auth()
  .signInWithPopup(provider)
  .then(async (result) => {
    // console.log(result)
    const { displayName, email, emailVerified, photoURL } = result.user;
    const { data } = await axios({
      method: 'post',
      url: 'http://localhost:3000/api/getToken',
      data: { displayName, email, emailVerified, photoURL },
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // console.log(data)
    if (typeof window !== 'undefined') {
      router.push('/admin')
    }
    /** @type {firebase.auth.OAuthCredential} */
    // const credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    // const token = credential.accessToken;
    // The signed-in user info.
    
    // ...
  }).catch((error) => {
    console.log(error)
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });
    }
  /**
   *  Sign out Function
   */
  const signOut = async () => {
    return await firebase.auth().signOut()
      .then(() => {        
        if (typeof window !== 'undefined') {
          router.push('/auth/signin')
        }
      })
  }
  return { signInWithGoogle, signOut, }
}
export default useAuth
