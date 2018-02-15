import React from "react";
import styled from "styled-components";
import CityInput from "./CityInput";
import CityIndex from "./CityIndex";

const ArrivalCity = styled.div`
  display: flex;
`;

export default () => (
  <ArrivalCity>
    <CityInput value="" placeholder="Город прибытия" />
    <CityIndex />
  </ArrivalCity>
);
