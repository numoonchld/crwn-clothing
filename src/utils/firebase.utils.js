import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiOuTZPpAymwF2vQlSJuqCab23zq4_OJA",
  authDomain: "crwn-clothing-db-c3215.firebaseapp.com",
  projectId: "crwn-clothing-db-c3215",
  storageBucket: "crwn-clothing-db-c3215.appspot.com",
  messagingSenderId: "871730378415",
  appId: "1:871730378415:web:60cb0066074428e24c865a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log({ userDocRef });

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  // if user data exists
  // return the userDocRef
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating user: ", error.message);
    }
  }

  // else create the document with the data from userAuth in my collection
};
