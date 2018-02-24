import React from "react";
import media from "../../../../common/media";
import styled from "styled-components";
import calendar from "./calendar.svg";
import Button from "../../../../common/Button";

const CalendarButton = styled(Button)`
  margin-left: auto;
`;

const FlightDate = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: white;
  padding: 16px;
`;

const DateText = styled.p`
  margin: 0;
  color: ${props => (props.disabled ? "#A0B0B9;" : "#4A4A4A")};
`;

const Departure = FlightDate.extend`
  border-radius: 0 0 0 4px;

  ${media.xl`
    border-radius: 0;
  `};
`;

export const DepartureDate = () => (
  <Departure>
    <DateText disabled>Туда</DateText>
    <CalendarButton>
      <img src={calendar} alt="Calendar Icon" />
    </CalendarButton>
  </Departure>
);

export const ArrivalDate = () => (
  <FlightDate>
    <DateText disabled>Обратно</DateText>
    <CalendarButton>
      <img src={calendar} alt="Calendar icon" />
    </CalendarButton>
  </FlightDate>
);
