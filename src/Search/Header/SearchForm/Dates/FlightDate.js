import React from "react";
import media from "../../../../common/media";
import styled from "styled-components";
import calendar from "./calendar.svg";
import DatePickerInput from "./DatePickerInput";
import Button from "../../../../common/Button";

const CalendarButton = styled(Button)`
  margin-left: auto;
`;

const FlightDate = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  align-items: center;
  background-color: white;
  padding: 16px;
  cursor: pointer;
`;

const Departure = FlightDate.extend`
  border-radius: 0 0 0 4px;

  ${media.xl`
    border-radius: 0;
  `};
`;

export class DepartureDate extends React.Component {
  state = {
    isShown: false
  };

  onClick = () => {
    this.setState({ isShown: true });
  };

  render() {
    return (
      <Departure onClick={this.onClick}>
        <DatePickerInput placeholder="Туда" isShown={this.state.isShown} />
        <CalendarButton>
          <img src={calendar} alt="Calendar Icon" />
        </CalendarButton>
      </Departure>
    );
  }
}

export class ArrivalDate extends React.Component {
  state = {
    isShown: false
  };

  onClick = () => {
    this.setState({ isShown: true });
  };

  render() {
    return (
      <FlightDate onClick={this.onClick}>
        <DatePickerInput placeholder="Обратно" isShown={this.state.isShown} />
        <CalendarButton>
          <img src={calendar} alt="Calendar icon" />
        </CalendarButton>
      </FlightDate>
    );
  }
}
