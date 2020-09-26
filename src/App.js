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

function App() {
  return (
    <>
    <CssBaseline />
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/category" component={Category} />
      </Switch>
      <Footer />
    </div>
    </>
  );
}

export default App;
