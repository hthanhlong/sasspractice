import React from "react";
import Paper from "@material-ui/core/Paper";
import Badge from "@material-ui/core/Badge";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Paper elevation={3}>
      <div className="container-fluid header">
        <nav className="row header__nav">
          <div className="col-3 col-sm-1 col-md-1 col-lg-1 col-lg-1">
            <span className="header__nav_log">
              <a href="#">
                <h1>MyShop.</h1>
              </a>
            </span>
          </div>
          <div className="col-sm-7 col-md-7 col-lg-7 col-xl-6">
            <ul className="header__nav_list">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <Badge badgeContent="HOT" color="secondary">
                  <a href="">Category</a>
                </Badge>
              </li>
              <li>
                <a href="#">Latest</a>
                <ul className="submenu">
                  <li>
                    <a href="">Products List</a>
                  </li>
                  <li>
                    <a href="">Products Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul className="submenu">
                  <li>
                    <a href="">Login</a>
                  </li>
                  <li>
                    <a href="">Card</a>
                  </li>
                  <li>
                    <a href="">Element</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Confirmation</a>
                  </li>
                  <li>
                    <a href="">Shopping Cart</a>
                  </li>
                  <li>
                    <a href="checkout.html">Product Checkout</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-5">
            <ul className="d-flex justify-content-between align-items-center header__nav_items">
              <li className="header__nav_search">
                <form>
                  <input
                    type="text"
                    name="Search"
                    placeholder="Search products"
                  />
                  <i>
                    <a href="#">
                      <SearchOutlinedIcon />
                    </a>
                  </i>
                </form>
              </li>
              <li className="header__nav_cart">
                <div className="outsizeicon">
                  <NavLink to="/">
                    <Badge badgeContent={2} color="secondary">
                      <ShoppingCartOutlinedIcon fontSize="large" />
                    </Badge>
                  </NavLink>
                </div>
              </li>
              <li className="header_nav_heart">
                <div className="outsizeicon">
                  <NavLink to="/">
                    <Badge badgeContent={2} color="secondary">
                      <FavoriteBorderOutlinedIcon fontSize="large" />
                    </Badge>
                  </NavLink>
                </div>
              </li>
              <li>
                <Button variant="contained" color="secondary">
                  Sign in
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Paper>
  );
};

export default Header;
