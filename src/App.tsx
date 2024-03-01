import React from "react";
import { AuthAccess } from "./API/auth/authCodeLogin";
import IpodBody from "./components/IpodBody";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

export const App: React.FC = () => {
  return (
    <AuthAccess>
      {" "}
      <SignIn></SignIn>
      <SignOut></SignOut>
      <IpodBody></IpodBody>
    </AuthAccess>
  );
};
