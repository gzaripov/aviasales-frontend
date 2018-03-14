import React from 'react';
import styled from 'styled-components';
import set from 'lodash/fp/set';
import media from '../../../common/media';
import { DepartureAirport, ArrivalAirport } from './Airports';
import Dates from '../../../Header/Dates';
import PassengerAndClass from './PassengerAndClass';
import airports from '../../../Header/AutocompleteField/airports.mock.json';

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

function getAirportByIata(iata) {
  return airports.filter(airport => airport.iata === iata);
}

export default class extends React.Component {
  state = {
    departureIata: '',
    arrivalIata: '',
  };

  onChange = path => (airport) => {
    this.setState(set(path, airport.iata, this.state));
  };

  onReverse = () => {
    const { departureIata, arrivalIata } = this.state;
    this.setState({
      departureIata: arrivalIata,
      arrivalIata: departureIata,
    });
  };

  render() {
    const { departureIata, arrivalIata } = this.state;
    const departureAirport = getAirportByIata(departureIata);
    const arrivalAirport = getAirportByIata(arrivalIata);
    return (
      <Form>
        <DepartureAirport
          data={departureAirport}
          onChange={this.onChange('departureIata')}
          onReverse={this.onReverse}
        />
        <ArrivalAirport data={arrivalAirport} onChange={this.onChange('arrivalIata')} />
        <FlightDates />
        <PassengerAndClass />
      </Form>
    );
  }
}
