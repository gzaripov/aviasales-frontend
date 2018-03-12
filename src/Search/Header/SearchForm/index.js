import React from 'react';
import styled from 'styled-components';
import set from 'lodash/fp/set';
import media from '../../../common/media';
import { DepartureAirport, ArrivalAirport } from './Airports';
import Dates from '../../../Header/Dates';
import PassengerAndClass from '../../../Header/PassengerAndClass';
import SearchButton from './SearchButton';

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
        <Dates />
        <PassengerAndClass />
        <SearchButton />
      </Form>
    );
  }
}
