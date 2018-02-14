import React from "react";
import styled from "styled-components";
import Compass from "./Compass";
import CityDestinations from "./City";
import Categories from "./Categories";
import CityCards from "./CityCards";

const Destination = styled.div`
  background-color: #f8fcff;
`;

export default () => (
  <Destination>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Compass />
          <CityDestinations />
          <Categories />
        </div>
      </div>
    </div>
    <CityCards />
  </Destination>
);
