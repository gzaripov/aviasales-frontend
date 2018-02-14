import React from "react";
import styled from "styled-components";
import Header from "./Header";
import CityCards from "./CityCards";
import Advice from "./Advice";

export default () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <Header />
        <CityCards />
        <Advice />
      </div>
    </div>
  </div>
);
