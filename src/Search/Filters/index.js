import React from 'react';
import styled from 'styled-components';
import set from 'lodash/fp/set';
import media from '../../common/media';
import Transfers from './Transfers';
import FlightTime from './FlightTime';
import TravelTime from './TravelTime';
import Airlines from './Airlines';
import ResetFilters from './ResetFilters';
import Filter from './Filter';

const FiltersStyled = styled.section`
  display: none;
  background-color: white;
  margin-top: 16px;
  border-radius: 4px;
  overflow: hidden;

  ${media.lg`
    display: block;
  `};
`;

const data = {
  flightTime: {
    origin: {
      takeoff: {
        range: [1519419900, 1519505100],
        boundaries: [1519419900, 1519505100],
      },
      landing: {
        range: [1519430700, 1519642200],
        boundaries: [1519430700, 1519642200],
      },
    },
    dest: {
      takeoff: {
        range: [1520046000, 1520109900],
        boundaries: [1520046000, 1520109900],
      },
      landing: {
        range: [1520078400, 1520232900],
        boundaries: [1520078400, 1520232900],
      },
    },
  },
  travelTime: {
    origin: {
      city: 'Москва',
      range: [260, 1451],
      boundaries: [260, 1451],
    },
    dest: {
      city: 'Барселона',
      range: [250, 1400],
      boundaries: [250, 1400],
    },
  },
};

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = data;
    this.onDataChange = this.onDataChange.bind(this);
  }

  onDataChange = (path, value) => {
    this.setState(set(path, value, this.state));
  };

  render() {
    const { flightTime, travelTime } = this.state;
    return (
      <FiltersStyled>
        <Transfers />
        <FlightTime {...flightTime} onChange={this.onDataChange} />
        <Filter title="Багаж" />
        <Filter title="Длительность пересадки" />
        <TravelTime {...travelTime} onChange={this.onDataChange} />
        <Airlines />
        <Filter title="Аэропорты" />
        <Filter title="Аэропорт пересадки" />
        <Filter title="Агенства" />
        <ResetFilters />
      </FiltersStyled>
    );
  }
}

export default Filters;
