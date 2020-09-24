import React from "react";
import "./app.css";
import Header from "./Components/Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route } from "react-router-dom";
import Blog from "./Container/Blog/Blog";
import Home from "./Container/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pages" component={Blog} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
