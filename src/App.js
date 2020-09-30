import React from "react";
import "./app.css";
import Header from "./Components/Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route } from "react-router-dom";
import Blog from "./Container/Blog/Blog";
import Home from "./Container/Home/Home";
import Footer from "./Components/Footer/Footer";
import Login from "./Container/Login/Login";
import Register from "./Container/Register/Register";
import Category from "./Container/Category/Category";
import ProductDetails from "./Container/ProductDetails/ProductDetails";
import Cart from "./Container/Cart/Cart";
import Contact from "./Container/Contact/Contact";
import Admin from "./Container/AdminPages/Admin/Admin";
import PrivateRouter from "./Services/PrivateRouter";

import ScrollToTop from "./Components/ScolltoTop";

function App() {
  return (
    <>
      <div className="app">
        <CssBaseline />
        <Header />
        <ScrollToTop />
        <Switch>
          <PrivateRouter exact path="/" component={Home} />
          <PrivateRouter exact path="/blog" component={Blog} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRouter exact path="/category" component={Category} />
          <PrivateRouter exact path="/cart" component={Cart} />
          <PrivateRouter exact path="/contact" component={Contact} />
          <PrivateRouter
            exact
            path="/productdetails/:id"
            component={ProductDetails}
          />
          <PrivateRouter exact path="/admin" component={Admin} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
