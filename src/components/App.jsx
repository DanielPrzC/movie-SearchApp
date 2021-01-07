import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Modal from "./Modal";
import Footer from "./Footer";
import Home from "../pages/Home";
import DetailPage from "../pages/DetailPage";
import NotFound from "../pages/NotFound";

function App() {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <div className="app">
      <main>
        <Switch location={background || location}>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={DetailPage} />
          <Route component={NotFound} />
        </Switch>
        {background && <Route path="/detail/:id" component={Modal} />}
      </main>
      <div className="gap"></div>
      <Footer />
    </div>
  );
}

export default App;
