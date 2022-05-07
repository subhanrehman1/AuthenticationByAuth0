import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
const LoginBtn = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="ui segment">
      <h1>Authentication Button using Auth0 API</h1>
      <p>
        Click the button below to get to the login page, where you can login
        using your gmail account, and can see the dashboard.
      </p>
      <button
        onClick={() => loginWithRedirect()}
        className="ui primary button auth"
      >
        Log in
      </button>
    </div>
  );
};

export default LoginBtn;
