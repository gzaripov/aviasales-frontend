import React from "react";
import media from "../../common/media";
import styled from "styled-components";
import CityInput from "./CityInput";
import CityIndex from "./CityIndex";

const ArrivalCity = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  background-color: white;
  margin: 1px;
  width: 100%;
  padding: 19px 16px;

  @media screen and (min-width: ${media.sm}) {
    width: calc(50% - 2px);
  }
  @media screen and (min-width: ${media.lg}) {
    width: calc(20% - 2px);
  }
`;

export default () => (
  <ArrivalCity>
    <CityInput placeholder="Город прибытия" />
    <CityIndex />
  </ArrivalCity>
);
