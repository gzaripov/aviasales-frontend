import React, { Component } from "react";
import Header from "./Header";
import Destinations from "./Destinations";
import Prices from "./Prices";
import Offers from "./Offers";
import Articles from "./Articles";
import MobileVersions from "./MobileVersions";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Destinations />
        <Prices />
        <Offers />
        <Articles />
        <MobileVersions />
        <Footer />
      </div>
    );
  }
}

export default App;
