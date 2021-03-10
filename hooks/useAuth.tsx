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
    await firebase.auth().signInWithRedirect(provider)
    return firebase.auth()
      .getRedirectResult()
      .then((result) => {
        console.log(result)
        // const token = await firebase.auth.currentUser.getIdToken(true)

        /** @type {firebase.auth.OAuthCredential} */
        // const credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        console.log(error)
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
          router.push('/auth/login')
        }
      })
  }
  return { signInWithGoogle, signOut, }
}
export default useAuth
