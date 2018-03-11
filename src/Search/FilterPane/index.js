import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import set from 'lodash/fp/set';
import media from '../../common/media';
import Transfers from './Transfers';
import Baggage from './Baggage';
import FlightTime from './FlightTime';
import TranferDuration from './TransferDuration';
import TravelTime from './TravelTime';
import Airlines from './Airlines';
import Airports from './Airports';
import TransferAirport from './TransferAirport';
import Agencies from './Agencies';
import ResetFilters from './ResetFilters';

const FilterPaneStyled = styled.section`
  display: none;
  background-color: white;
  margin-top: 16px;
  margin-bottom: 40px;
  border-radius: 4px;
  overflow: hidden;

  ${media.lg`
    display: block;
  `};
`;

const data = {
  transfers: {
    checks: [
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
  },
  baggage: {
    checks: [
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
  },
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
  transferAirport: {
    withoutAirportChange: false,
    origin: {
      city: 'Москва',
      transfers: [
        [
          {
            id: 0,
            label: 'Амстердам',
            iata: 'ams',
            checked: true,
          },
          {
            id: 1,
            label: 'Афины',
            iata: 'ath',
            checked: true,
          },
          {
            id: 2,
            label: 'Берлин',
            iata: 'txl',
            checked: true,
          },
          {
            id: 3,
            label: 'Будапешт',
            iata: 'bud',
            checked: true,
          },
          {
            id: 4,
            label: 'Варшава',
            iata: 'waw',
            checked: true,
          },
        ],
        [
          {
            id: 0,
            label: 'Пальма-де-Мальйорка',
            iata: 'pmi',
            checked: true,
          },
          {
            id: 1,
            label: 'Прага',
            iata: 'prg',
            checked: true,
          },
          {
            id: 2,
            label: 'Франкфурт-на-Майне',
            iata: 'fra',
            checked: true,
          },
          {
            id: 3,
            label: 'Цюрих',
            iata: 'zrh',
            checked: true,
          },
        ],
      ],
    },
    dest: {
      city: 'Барселона',
      transfers: [
        [
          {
            id: 0,
            label: 'Амстердам',
            iata: 'ams',
            checked: true,
          },
          {
            id: 1,
            label: 'Афины',
            iata: 'ath',
            checked: true,
          },
          {
            id: 2,
            label: 'Берлин',
            iata: 'txl',
            checked: true,
          },
          {
            id: 3,
            label: 'Брюссель',
            iata: 'bru',
            checked: true,
          },
          {
            id: 4,
            label: 'Варшава',
            iata: 'waw',
            checked: true,
          },
        ],
        [
          {
            id: 0,
            label: 'Екатеринбург',
            iata: 'svx',
            checked: true,
          },
          {
            id: 1,
            label: 'Женева',
            iata: 'gva',
            checked: true,
          },
          {
            id: 2,
            label: 'Мюнхен',
            iata: 'muc',
            checked: true,
          },
          {
            id: 3,
            label: 'Санкт-Петербург',
            iata: 'led',
            checked: true,
          },
        ],
      ],
    },
  },
  agencies: {
    checks: [
      {
        id: 1,
        label: 'Aerobilet',
        price: 12175,
        checked: true,
      },
      {
        id: 2,
        label: 'Aeroflot',
        price: 20235,
        checked: true,
      },
      {
        id: 3,
        label: 'Aerotur.aero',
        price: 16571,
        checked: true,
      },
      {
        id: 4,
        label: 'Air Europa',
        price: 28209,
        checked: true,
      },
      {
        id: 5,
        label: 'Aviakassa',
        price: 11175,
        checked: true,
      },
      {
        id: 6,
        label: 'Belavia',
        price: 20875,
        checked: true,
      },
      {
        id: 7,
        label: 'Biletix',
        price: 11120,
        checked: true,
      },
      {
        id: 8,
        label: 'Clickavia',
        price: 11845,
        checked: true,
      },
    ],
  },
};

const Filters = ({ filterData, onChange, children }) => {
  const filters = React.Children.map(children, child =>
    React.cloneElement(child, {
      ...filterData[child.props.path],
      onChange: onChange(child.props.path),
    }));
  return <React.Fragment>{filters}</React.Fragment>;
};

Filters.propTypes = {
  filterData: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

function copy(object) {
  return JSON.parse(JSON.stringify(object));
}

function putMemento(object) {
  return {
    memento: copy(object),
    ...object,
  };
}

class FilterPane extends React.Component {
  state = putMemento(data);

  onDataChange = outerPath => (innerPath, value) => {
    const path = outerPath + (innerPath ? `.${innerPath}` : '');
    this.setState(set(path, value, this.state));
  };

  onClear = (path) => {
    const oldValue = copy(this.state.memento[path]);
    this.setState(set(path, oldValue, this.state));
  };

  onClearAll = () => {
    const { memento } = this.state;
    this.setState({
      memento,
      ...copy(memento),
    });
  };

  render() {
    return (
      <FilterPaneStyled>
        <Filters filterData={this.state} onChange={this.onDataChange} onClear={this.onClear}>
          <Transfers path="transfers" />
          <FlightTime path="flightTime" />
          <Baggage path="baggage" />
          <TranferDuration path="transferDuration" />
          <TravelTime path="travelTime" />
          <Airlines path="airlines" />
          <Airports path="airports" />
          <TransferAirport path="transferAirport" />
          <Agencies path="agencies" />
        </Filters>
        <ResetFilters onReset={() => this.onClearAll()} />
      </FilterPaneStyled>
    );
  }
}

export default FilterPane;
