import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutBtn from "./LogoutBtn";
const Dashboard = () => {
  const { user } = useAuth0();
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <h4>Sensitive information is here:</h4>
      </div>
      <div>{JSON.stringify(user, null, 2)}</div>
      <LogoutBtn />
    </div>
  );
};

export default Dashboard;
