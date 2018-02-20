import React from "react";
import Main from "./Main";
import Search from "./Search";
import Footer from "./Footer";

import { BrowserRouter as Router, Route } from "react-router-dom";

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/search" component={Search} />
      <Footer />
    </div>
  </Router>
);
