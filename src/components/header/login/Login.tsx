import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import {
  LoginPage,
  LoginCard,
  Text,
  LoginButtonGoogle,
  LoginButtonFacebook,
} from "./Login.style";

const login = () => {
  return (
    <LoginPage>
      <LoginCard>
        <Text>Welcome to chat</Text>
        <LoginButtonGoogle>
          <GoogleOutlined /> Sign in with Google
        </LoginButtonGoogle>
        <LoginButtonFacebook>
          <FacebookOutlined /> Sign In with Facebook
        </LoginButtonFacebook>
      </LoginCard>
    </LoginPage>
  );
};

export default login;
