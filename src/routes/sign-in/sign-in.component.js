import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  //   signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  //   const redirectResult = async () => {
  //     const response = await getRedirectResult(auth);

  //     console.log({ response });

  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //       console.log({ userDocRef });
  //     }
  //   };

  //   useEffect(() => {
  //     redirectResult();
  //   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);

    console.log({ userDocRef });
  };

  //   const logGoogleRedirectUser = async () => {
  //     const { user } = await signInWithGoogleRedirect();
  //     console.log({ user });
  //   };

  return (
    <div>
      <h1>Sign-in Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={logGoogleRedirectUser}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
