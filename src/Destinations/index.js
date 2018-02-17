import React from "react";
import styled from "styled-components";
import media from "../common/media";
import City from "./City";
import Categories from "./Categories";
import CityCards from "./CityCards";
import compass from "./compass.svg";
const Destination = styled.section`
  background-color: #f8fcff;
`;

const Icon = styled.img`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;

  ${media.md`
    margin-top: 56px;
    margin-bottom: 20px;
  `};
`;

export default () => (
  <Destination>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Icon src={compass} alt="Destination icon" />
          <City />
        </div>
      </div>
      <Categories />
    </div>
    <CityCards />
  </Destination>
);
