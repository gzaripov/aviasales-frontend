import React from "react";
import styled from "styled-components";
import calendar from "./icons/calendar.svg";
import CityInput from "./CityInput";

const DepartureDate = styled.div`
  display: flex;
`;

export default () => (
  <DepartureDate>
    <CityInput value="" placeholder="Туда" disabled />
    <img src={calendar} alt="Arrow" />
  </DepartureDate>
);
