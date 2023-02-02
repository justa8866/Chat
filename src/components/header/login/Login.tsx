import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import {
  LoginPage,
  LoginCard,
  Text,
  LoginButtonGoogle,
  LoginButtonFacebook,
} from "./Login.style";
import "firebase/app";
import { auth } from "../../../Firebase/firebase";
import {
  AuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();

const Login = () => {
  const signWith= async (provider: AuthProvider) => {
    await signInWithPopup(auth, provider);
  };

  return (
    <LoginPage>
      <LoginCard>
        <Text>Welcome to chat</Text>
        <LoginButtonGoogle onClick={() => signWith(providerGoogle)}>
          <GoogleOutlined /> Sign in with Google
        </LoginButtonGoogle>
        <LoginButtonFacebook  onClick={() => signWith(providerFacebook)}>
          <FacebookOutlined /> Sign In with Facebook
        </LoginButtonFacebook>
      </LoginCard>
    </LoginPage>
  );
};

export default Login;
