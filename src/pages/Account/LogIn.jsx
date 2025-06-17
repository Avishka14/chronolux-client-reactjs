import React from "react";
import "./Account.css";
import { Checkbox, FormControlLabel } from "@mui/material";
import MiniLogo from "/assets/icons/chronolux-png.png";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div className="main-logIn-container">
      <div className="heading-logIn">
        <img src={MiniLogo} alt="logo" />
        <h2>Log In to Your Account</h2>
      </div>

      <form className="logIn-Box">
        <div className="input-section">
          <label htmlFor="emailOrMobile">Mobile or E-Mail</label>
          <input
            type="text"
            id="emailOrMobile"
            placeholder="Enter email or mobile"
            autoComplete="username"
            required
          />
        </div>

        <div className="input-section">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            autoComplete="current-password"
            required
          />
        </div>

        <div className="savePassword-checkBox-Login">
          <FormControlLabel control={<Checkbox />} label="Save Password" />
        </div>

        <div className="password-recover">
          <a href="#">Forgot Password?</a>
        </div>

        <div className="logIn-buttons">
          <button className="log-in-btn">Log In</button>

          <Link to={"/signin"} className="sign-in-btn">
            <button>Don't have an Account ?</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
