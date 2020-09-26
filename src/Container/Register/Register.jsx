import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";
import FacebookIcon from "@material-ui/icons/Facebook";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const login = () => {
  return (
    <div className="background__register">
      <div className="row register">
        <div className="loginform">
          <span className="registerform__title">
            <h1>REGISTRATION FORM</h1>
          </span>
          <div className="loginform__group">
            <span>
              <AccountBoxIcon />
            </span>
            <input name="name" type="text" placeholder="Name..." />
          </div>
          <div className="loginform__group">
            <span>
              <MailOutlineIcon />
            </span>
            <input name="email" type="email" placeholder="Email..." />
          </div>
          <div className="loginform__group">
            <span>
              <LockIcon />
            </span>
            <input name="password" type="password" placeholder="Password..." />
          </div>
          <div className="register__button">
            <Button type="submit">Register</Button>
          </div>
        </div>

        <div className="login__link">
          <Link to="/login">Already have an account? Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default login;
