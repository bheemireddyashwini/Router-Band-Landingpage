import "./Login.css";

import React, { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginData = {
    username: "react",
    password: "r3@ct",
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (userName === loginData.username && password === loginData.password) {
      setError("Login Successful!!");
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={submitHandler} className="login-form">
        <label>
          <span>Username</span>
          <input
            name="userName"
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            name="password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};

export default Login;
