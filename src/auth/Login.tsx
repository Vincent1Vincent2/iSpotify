import React from "react";

interface LoginProps {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

function Login({ setAuthenticated }: LoginProps) {
  const handleLogin = () => {
    console.log("Login button clicked");
    setAuthenticated(true);
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
