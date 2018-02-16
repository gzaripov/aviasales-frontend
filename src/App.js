import React, { Component } from "react";
import Header from "./Header";
import Destinations from "./Destinations";
import Prices from "./Prices";
import Promotion from "./Promotion";
import Offers from "./Offers";
import Articles from "./Articles";
import MobileApp from "./MobileApp";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Destinations />
        <Prices />
        <Promotion />
        <Offers />
        <Articles />
        <MobileApp />
        <Footer />
      </div>
    );
  }
}

export default App;
