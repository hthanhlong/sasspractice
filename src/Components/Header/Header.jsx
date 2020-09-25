import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Badge from "@material-ui/core/Badge";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Button, IconButton } from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const toggleMenu = () => {
    setIsActiveMenu(!isActiveMenu);
  };

  return (
    <Paper elevation={3}>
      <div className="container-fluid header">
        <nav className="row header__nav">
          <div className="col-3 col-sm-1 col-md-1 col-lg-1 col-lg-1">
            <span className="header__nav_logo">
              <NavLink to="/">
                <h1>MyShop.</h1>
              </NavLink>
            </span>
          </div>
          <div className="d-none d-lg-block col-lg-6 col-xl-6">
            <ul className="header__nav_list">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <Badge badgeContent="HOT" color="secondary">
                  <NavLink to="">Category</NavLink>
                </Badge>
              </li>
              <li>
                <NavLink to="#">Latest</NavLink>
                <ul className="submenu">
                  <li>
                    <NavLink to="">Products List</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Products Details</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/">Pages</NavLink>
                <ul className="submenu">
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Card</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Element</NavLink>
                  </li>
                  <li>
                    <NavLink to="">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Confirmation</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Shopping Cart</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Product Checkout</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-9 col-sm- col-md-8 col-lg-5 col-xl-5">
            <ul className="d-flex justify-content-between align-items-center header__nav_items">
              <li className="d-none d-md-block">
                <form>
                  <input
                    type="text"
                    name="Search"
                    placeholder="Search products"
                  />
                  <i>
                    <NavLink to="#">
                      <SearchOutlinedIcon />
                    </NavLink>
                  </i>
                </form>
              </li>
              <li className="header__nav_cart">
                <div className="outsizeicon">
                  <NavLink to="/">
                    <Badge badgeContent={2} color="secondary">
                      <ShoppingCartOutlinedIcon style={{ fontSize: "24px" }} />
                    </Badge>
                  </NavLink>
                </div>
              </li>
              <li className="d-none d-md-block header_nav_heart">
                <div className="outsizeicon">
                  <NavLink to="/">
                    <Badge badgeContent={2} color="secondary">
                      <FavoriteBorderOutlinedIcon
                        style={{ fontSize: "24px" }}
                      />
                    </Badge>
                  </NavLink>
                </div>
              </li>
              <li className="d-none d-lg-block header__nav_button">
                <Link to="/login">
                  <Button variant="contained">Sign in</Button>
                </Link>
              </li>
              <li className="mobile_button d-lg-none">
                <IconButton onClick={toggleMenu}>
                  <MenuOutlinedIcon />
                </IconButton>
              </li>
            </ul>
          </div>
          <div
            className={
              isActiveMenu
                ? "nav_mobile d-lg-blcok"
                : "nav_mobile d-sm-none togglemenu"
            }
          >
            <ul className="nav_list">
              <li>Sign in</li>
              <li>About</li>
              <li>Contact</li>
              <li>Cart</li>
              <li className="nav_close" onClick={toggleMenu}>
                x
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Paper>
  );
};

export default Header;
