import React from 'react';
import styled from 'styled-components';
import set from 'lodash/fp/set';
import media from '../../../common/media';
import { DepartureAirport, ArrivalAirport } from './Airports';
import Dates from '../../../Header/Dates';
import PassengerAndClass from '../../../Header/PassengerAndClass';
import SearchButton from './SearchButton';
import airports from '../../../Header/AutocompleteField/airports.mock.json';

const Form = styled.form`
  display: none;
  flex: 1;
  justify-content: flex-end;
  flex-wrap: wrap;
  position: relative;

  ${media.sm`
    display: flex;
    justify-center: center;
  `};
`;

function getAirportByIata(iata) {
  return airports.find(airport => airport.iata === iata);
}

export default class extends React.Component {
  state = {
    departure: {
      value: '',
      iata: '',
    },
    arrival: {
      value: '',
      iata: '',
    },
  };

  onReverse = () => {
    const { departure, arrival } = this.state;
    this.setState({
      departure: arrival,
      arrival: departure,
    });
  };

  onChange = path => (airport) => {
    this.setState(set(`${path}.value`, airport, this.state));
  };

  handleSelect = path => (airport) => {
    this.setState(set(`${path}.iata`, airport.iata, this.state));
  };

  render() {
    const { departure, arrival } = this.state;
    const departureAirport = getAirportByIata(departure.iata) || { city: departure.value };
    const arrivalAirport = getAirportByIata(arrival.iata) || { city: arrival.value };
    return (
      <Form>
        <DepartureAirport
          data={departureAirport}
          onChange={this.onChange('departure')}
          handleSelect={this.handleSelect('departure')}
          onReverse={this.onReverse}
        />
        <ArrivalAirport
          data={arrivalAirport}
          onChange={this.onChange('arrival')}
          handleSelect={this.handleSelect('arrival')}
        />
        <Dates />
        <PassengerAndClass />
        <SearchButton />
      </Form>
    );
  }
}
