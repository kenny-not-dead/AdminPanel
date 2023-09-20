import React from "react";
import RouterBreadcrumbs from "./components/RouterBreadcrumbs";
import { BrowserRouter } from "react-router-dom";
import { Content } from "./components/Content";
import classes from "./App.module.scss";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <RouterBreadcrumbs />
        <div className={classes.contentWrapper}>
          <Header />
          <Content />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
