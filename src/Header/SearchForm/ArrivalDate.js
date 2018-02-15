import React from "react";
import styled from "styled-components";
import calendar from "./icons/calendar.svg";
import CityInput from "./CityInput";

const ArrivalDate = styled.div`
  display: flex;
`;

export default () => (
  <ArrivalDate>
    <CityInput value="" placeholder="Обратно" disabled />
    <img src={calendar} alt="Calendar" />
  </ArrivalDate>
);
