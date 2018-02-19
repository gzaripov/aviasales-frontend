import React, { Component } from "react";
import Header from "./Header";
import Destinations from "./Destinations";
import Prices from "./Prices";
import Slider from "./Slider";
import Subscribe from "./Subscribe";
import Offers from "./Offers";
import Articles from "./Articles";
import MobileApp from "./MobileApp";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Destinations />
          <Prices />
          <Slider />
          <Subscribe />
          <Offers />
          <Articles />
          <MobileApp />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
