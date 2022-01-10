import React from "react";

import SignIn from "../../components/sign-in/sing-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./login-page.stlyes.scss";

const LoginPage = () => (
  <div className="login-page-forms-container">
    <SignIn />
    <SignUp />
  </div>
);

export default LoginPage;
