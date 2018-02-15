import React from "react";
import styled from "styled-components";
import CityInput from "./CityInput";
import CityIndex from "./CityIndex";
import arrow from "./icons/arrow.svg";

const SwapButton = styled.img``;

const DepartureCity = styled.div`
  display: flex;
`;

export default () => (
  <DepartureCity>
    <CityInput value="Москва" placeholder="Город вылета" />
    <CityIndex>mow</CityIndex>
    <SwapButton src={arrow} alt="Swap cities button" />
  </DepartureCity>
);
