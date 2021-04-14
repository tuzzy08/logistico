// import { useState, useEffect, createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { firebase } from '../config/firebase'

// custom hook that manages login and logout
function useAuth() {
  // create an instance of the google provider object
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().useDeviceLanguage()
  const router = useRouter()

  // Sign In with Google
  const signInWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(async (result) => {
        console.log(result.user.displayName)
        const {
          displayName,
          email,
          emailVerified,
          photoURL,
        } = result.user
        await axios({
          method: 'post',
          url: 'http://localhost:3000/api/getToken',
          data: { displayName, email, emailVerified, photoURL },
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (typeof window !== 'undefined') {
          router.push('/admin')
        }
      })
      .catch((error) => {
        // TODO: Handle this error
        // Handle Errors here.
        // const errorCode = error.code
        // const errorMessage = error.message
        // The email of the user's account used.
        // const email = error.email
        // The firebase.auth.AuthCredential type that was used.
        // const credential = error.credential
        // ...
        console.error(error)
      })
  }
  /**
   *  Sign out Function
   */
  const signOut = async () =>
    firebase
      .auth()
      .signOut()
      .then(async () => {
        await axios({
          method: 'get',
          url: 'http://localhost:3000/api/signOut',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (typeof window !== 'undefined') {
          router.push('/')
        }
      })
  return { signInWithGoogle, signOut }
}
export default useAuth
