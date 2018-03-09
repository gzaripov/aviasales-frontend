import React from 'react';
import styled from 'styled-components';
import set from 'lodash/fp/set';
import media from '../../common/media';
import Transfers from './Transfers';
import Baggage from './Baggage';
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
  transfers: [
    {
      id: 1,
      label: 'Без пересадок',
      price: 7712,
      checked: true,
    },
    {
      id: 2,
      label: '1 пересадка',
      price: 11712,
    },
    {
      id: 3,
      label: '2 пересадки',
      price: 23712,
    },
    {
      id: 4,
      label: '3 пересадки',
      price: 47712,
    },
  ],
  baggage: [
    {
      id: 1,
      label: 'Багаж и ручная кладь',
      price: 7712,
      checked: true,
    },
    {
      id: 2,
      label: 'Без багажа',
      price: 11712,
      checked: true,
    },
  ],
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
  state = data;

  onDataChange = (path, value) => {
    this.setState(set(path, value, this.state));
  };

  render() {
    const {
      transfers, baggage, flightTime, travelTime,
    } = this.state;
    return (
      <FiltersStyled>
        <Transfers data={transfers} onChange={this.onDataChange} />
        <FlightTime {...flightTime} onChange={this.onDataChange} />
        <Baggage data={baggage} onChange={this.onDataChange} />
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
