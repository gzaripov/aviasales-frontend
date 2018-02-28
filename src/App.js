import React from "react";
import Main from "./Main";
import Search from "./Search";
import Footer from "./Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { IntlProvider, addLocaleData } from "react-intl";
import ru from "react-intl/locale-data/ru";

addLocaleData(ru);

export default () => (
  <Router>
    <IntlProvider locale="ru">
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/search" component={Search} />
        <Footer />
      </div>
    </IntlProvider>
  </Router>
);
