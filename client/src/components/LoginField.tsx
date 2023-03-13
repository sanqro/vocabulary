import React from "react";
import { useNavigate } from "react-router-dom";
import OnClickButton from "./OnClickButton";

function LoginField() {

  const nav = useNavigate();

  const submitLogin = async() => {
    const username = (document.getElementById("username") as HTMLInputElement).value as string;
    const password = (document.getElementById("password") as HTMLInputElement).value as string;
  
    if (username == "" || password == "") {
      alert("Please provide your password and username!");
      return false;
    }
  
    const login = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });
  
    const response = await login.json();
    if (await response.success) {
      sessionStorage.setItem("user", username);
      sessionStorage.setItem("token", response.token);
      nav("/");
    } else {
      alert("There was an error: " + response.error);
    }
  };
  
  return(
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center rounded-md py-8 px-10 w-1/4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Login</h1>
        <div className="flex flex-col space-y-2">
          <label htmlFor="username" className="text-gray-800 font-bold text-lg">
              Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            id="username"
            className="py-2 px-4 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="text-gray-800 font-bold text-lg">
              Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            className="py-2 px-4 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <OnClickButton
            onClick={submitLogin}
            label="Login"
            className="py-2 px-4 text-white text-xl rounded mx-10% bg-blue-500 hover:bg-blue-600 w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginField;
