import React from "react";
import styled from "styled-components";
import calendar from "./calendar.svg";
import DateText from "./DateText";
import Button from "../../../../common/Button";

const ArrivalDate = styled.div`
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
  <ArrivalDate>
    <DateText disabled>Обратно</DateText>
    <CalendarButton>
      <img src={calendar} alt="Calendar icon" />
    </CalendarButton>
  </ArrivalDate>
);
