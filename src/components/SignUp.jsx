import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../actions/Action";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "", email: "" });
  const dispatch = useDispatch();

  const handleSignup = () => {
    if (!user.username || !user.password || !user.email) {
      alert("please enter your detail");
    } else {
      dispatch(signup(user));
      navigate("/login");
      console.log(user);
    }
  };

  return (
    <div  className="loginform">
      <h1>Signup</h1>
      <form className="lform">
      <input
        type="text"
        placeholder="Username"
        value={user.username}
        required
        className="loginforminput"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        required
        className="loginforminput"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        required
        className="loginforminput"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button  className="formbtn" onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
};

export default SignUp;
