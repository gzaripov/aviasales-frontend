import React from 'react';
import styled from 'styled-components';
import set from 'lodash/fp/set';
import media from '../../common/media';
import Transfers from './Transfers';
import Baggage from './Baggage';
import FlightTime from './FlightTime';
import TranferDuration from './TransferDuration';
import TravelTime from './TravelTime';
import Airlines from './Airlines';
import Airports from './Airports';
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
  transferDuration: {
    range: [260, 1440],
    boundaries: [260, 1440],
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
  airlines: {
    severalAirlines: false,
    alliances: [
      {
        id: 1,
        label: 'Star Alliance',
        price: 11150,
        checked: true,
      },
      {
        id: 2,
        label: 'OneWorld',
        price: 12370,
        checked: true,
      },
      {
        id: 3,
        label: 'SkyTeam',
        price: 16290,
        checked: true,
      },
    ],
    airlines: [
      {
        id: 5,
        label: 'Aegean Airlines',
        price: 7712,
        checked: true,
      },
      {
        id: 6,
        label: 'Air Algerie',
        price: 29105,
        checked: true,
      },
      {
        id: 7,
        label: 'Air France',
        price: 17050,
        checked: true,
      },
      {
        id: 8,
        label: 'Air Moldova',
        price: 22613,
        checked: true,
      },
      {
        id: 9,
        label: 'Alitalia',
        price: 23712,
        checked: true,
      },
      {
        id: 10,
        label: 'Alitalia CityLiner',
        price: 20271,
        checked: true,
      },
      {
        id: 11,
        label: 'Belle Air',
        price: 18371,
        checked: true,
      },
      {
        id: 12,
        label: 'British Airways',
        price: 23839,
        checked: true,
      },
      {
        id: 13,
        label: 'Brussels Airlines',
        price: 11150,
        checked: true,
      },
      {
        id: 14,
        label: 'Bulgaria Air',
        price: 20114,
        checked: true,
      },
    ],
  },
  airports: {
    origin: {
      takeoff: [
        {
          id: 1,
          label: 'Домодедово',
          price: 10567,
          checked: true,
        },
        {
          id: 2,
          label: 'Шереметьево',
          price: 10940,
          checked: true,
        },
        {
          id: 3,
          label: 'Внуково',
          price: 12594,
          checked: true,
        },
        {
          id: 4,
          label: 'Жуковский',
          price: 17650,
          checked: true,
        },
      ],
      landing: [
        {
          id: 5,
          label: 'Домодедово',
          price: 10567,
          checked: true,
        },
        {
          id: 7,
          label: 'Шереметьево',
          price: 10940,
          checked: true,
        },
        {
          id: 9,
          label: 'Внуково',
          price: 12594,
          checked: true,
        },
        {
          id: 11,
          label: 'Жуковский',
          price: 17650,
          checked: true,
        },
      ],
    },
    dest: {
      takeoff: [
        {
          id: 1,
          label: 'Эль-Прат',
          price: 10567,
          checked: true,
        },
      ],
      landing: [
        {
          id: 2,
          label: 'Эль-Прат',
          price: 10567,
          checked: true,
        },
      ],
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
      transfers,
      baggage,
      transferDuration,
      flightTime,
      travelTime,
      airlines,
      airports,
    } = this.state;
    return (
      <FiltersStyled>
        <Transfers data={transfers} onChange={this.onDataChange} />
        <FlightTime {...flightTime} onChange={this.onDataChange} />
        <Baggage data={baggage} onChange={this.onDataChange} />
        <TranferDuration {...transferDuration} onChange={this.onDataChange} />
        <TravelTime {...travelTime} onChange={this.onDataChange} />
        <Airlines {...airlines} onChange={this.onDataChange} />
        <Airports {...airports} onChange={this.onDataChange} />
        <Filter title="Аэропорт пересадки" />
        <Filter title="Агенства" />
        <ResetFilters />
      </FiltersStyled>
    );
  }
}

export default Filters;
