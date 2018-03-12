import React from 'react';
import styled from 'styled-components';
import set from 'lodash/fp/set';
import media from '../../../common/media';
import { DepartureAirport, ArrivalAirport } from './Airports';
import Dates from '../../../Header/Dates';
import PassengerAndClass from './PassengerAndClass';

const Form = styled.form`
  margin: -2px;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const FlightDates = styled(Dates)`
  ${media.sm`
    width: calc(50% - 2px);
  `};

  ${media.lg`
    width: calc(35% - 2px);
  `};

  ${media.xl`
    width: calc(35% - 2px);
  `};
`;

export default class extends React.Component {
  state = {
    departureAirport: {
      city: '',
      country: '',
      iata: '',
    },
    arrivalAirport: {
      city: '',
      country: '',
      iata: '',
    },
  };

  onChange = path => (airport) => {
    this.setState(set(path, airport, this.state));
  };

  onReverse = () => {
    const { departureAirport, arrivalAirport } = this.state;
    this.setState({
      departureAirport: arrivalAirport,
      arrivalAirport: departureAirport,
    });
  };

  render() {
    const { departureAirport, arrivalAirport } = this.state;
    return (
      <Form>
        <DepartureAirport
          data={departureAirport}
          onChange={this.onChange('departureAirport')}
          onReverse={this.onReverse}
        />
        <ArrivalAirport data={arrivalAirport} onChange={this.onChange('arrivalAirport')} />
        <FlightDates />
        <PassengerAndClass />
      </Form>
    );
  }
}
