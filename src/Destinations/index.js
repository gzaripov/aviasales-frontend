import React from "react";
import styled from "styled-components";
import Compass from "./Compass";
import City from "./City";
import Categories from "./Categories";
import CityCards from "./CityCards";

const Destination = styled.section`
  background-color: #f8fcff;
`;

export default () => (
  <Destination>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Compass />
          <City />
        </div>
      </div>
      <Categories />
    </div>
    <CityCards />
  </Destination>
);
