import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/Action";
import SignUp from "./SignUp";
const Dashboard = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Simulate logout logic (e.g., clear user data)
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      {!isAuthenticated ? (
        <>
          <SignUp />
        </>
      ) : (
        <div>
          <h1>Welcome to the Dashboard</h1>
          <h3>User : {user.username}</h3>
          <h3>email : {user.email}!</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </>
  );
};

export default Dashboard;
