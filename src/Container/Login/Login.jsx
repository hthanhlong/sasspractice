import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";
import FacebookIcon from "@material-ui/icons/Facebook";

const Login = () => {
  return (
    <div className="background">
      <div className="row login">
        <div className="loginform">
          <span className="loginform__title">
            <h1>LOGIN</h1>
          </span>
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
          <div className="loginform__group">
            <div className="loginform__group_checkbox">
              <input id="checkbox" name="checkbox" type="checkbox" />
              <label htmlFor="checkbox">Remember me</label>
            </div>
          </div>
          <Button type="submit">Login</Button>
        </div>
        <div className="logincontent">
          <h3>Or login with</h3>
          <div className="login__social">
            <div className="login__social-item">
              <span className="facebook_icon">
                <FacebookIcon />
              </span>
              <Link to="/">Facebook</Link>
            </div>
            <div className="login__social-item">
              <h2>G</h2>
              <Link to="/">Google</Link>
            </div>
          </div>
        </div>
        <div className="register__link">
          <Link to="/register">Don't have an account? Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
