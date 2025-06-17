import React from "react";
import "./Account.css";
import { Checkbox, FormControlLabel } from "@mui/material";
import MiniLogo from "/assets/icons/chronolux-png.png";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="main-logIn-container">
      <div className="heading-logIn">
        <img src={MiniLogo} alt="logo" />
        <h2>Create a Account</h2>
      </div>

      <form className="logIn-Box">

       <div className="input-section">
  <label htmlFor="fullName">Full Name</label>
  <input
    type="text"
    id="fullName"
    placeholder="Enter your full name"
    autoComplete="name"
    required
  />
</div>

<div className="input-section">
  <label htmlFor="mobile">Mobile</label>
  <input
    type="tel"
    id="mobile"
    placeholder="Enter mobile"
    autoComplete="tel"
    required
  />
</div>

<div className="input-section">
  <label htmlFor="email">E-Mail</label>
  <input
    type="email"
    id="email"
    placeholder="Enter email"
    autoComplete="email"
    required
  />
</div>

<div className="input-section">
  <label htmlFor="password">Password</label>
  <input
    type="password"
    id="password"
    placeholder="Enter password"
    autoComplete="new-password"
    required
  />
</div>

        <div className="savePassword-checkBox-Login">
          <FormControlLabel control={<Checkbox />} label="Save Password" />
        </div>

        <div className="logIn-buttons">
          <button className="log-in-btn">Create Account</button>
          <Link to={'/login'} className="sign-in-btn">
          <button>Already Have a One ?</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
