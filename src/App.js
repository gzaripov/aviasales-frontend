import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import ru from 'react-intl/locale-data/ru';
import React from 'react';
import Main from './Main';
import Search from './Search';
import Footer from './Footer';

addLocaleData(ru);

export default () => (
  <IntlProvider locale="ru">
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/search" component={Search} />
        <Footer />
      </div>
    </Router>
  </IntlProvider>
);
