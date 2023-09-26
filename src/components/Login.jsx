import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/Action";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import SignUp from "./SignUp";
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const userDetails = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    if (
      credentials.username === userDetails.username &&
      credentials.password === userDetails.password
    ) {
      dispatch(login(userDetails));
      navigate("/");
    } else {
      alert("invalid details");
    }
  };

  return (
    <>
    {!isAuthenticated ? (
        <>
          <SignUp />
        </>
      ) : (
    <div className="loginform">
      <h3>Login</h3>
      <form className="lform">
      <input
        type="text"
        placeholder="Username"
        className="loginforminput"
        value={credentials.username}
        required
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        className="loginforminput"
        value={credentials.password}
        required
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
        
      <button   className="formbtn" onClick={handleLogin}>Login</button>
      </form>
    </div>
  )}
    </>
  );
};

export default Login;
