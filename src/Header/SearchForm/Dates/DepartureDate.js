import React from "react";
import styled from "styled-components";
import calendar from "./icons/calendar.svg";
import Button from "../../../common/Button";
import DateText from "./DateText";

const DepartureDate = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: white;
  padding: 16px;
`;

const CalendarButton = styled(Button)`
  margin-left: auto;
`;

export default () => (
  <DepartureDate>
    <DateText disabled>Туда</DateText>
    <CalendarButton>
      <img src={calendar} alt="Calendar Icon" />
    </CalendarButton>
  </DepartureDate>
);
