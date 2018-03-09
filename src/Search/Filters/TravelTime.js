import React from 'react';
import styled from 'styled-components';
import Direction from './Direction';
import Filter from './Filter';
import RangeTimePicker from './RangeTimePicker';

const Info = styled.div`
  padding-top: 16px;
`;

const Travel = styled.div`
  margin-top: 10px;
  margin-bottom: 24px;
`;

export default class extends React.Component {
  state = {
    origin: {
      city: 'Москва',
      min: 260,
      max: 1451,
      range: [260, 1451],
    },
    dest: {
      city: 'Барселона',
      min: 250,
      max: 1400,
      range: [250, 1400],
    },
  };
  onChange = (type, range) => {
    this.setState((prevState) => {
      const { city, min, max } = prevState[type];
      const newState = prevState;
      newState[type] = {
        city,
        min,
        max,
        range,
      };
      return newState;
    });
  };
  render() {
    const { origin, dest } = this.state;
    return (
      <Filter title="Время в пути" initialOpened>
        <Travel>
          <Direction from={origin.city} to={dest.city} />
          <Info>
            <RangeTimePicker {...origin} onChange={value => this.onChange('origin', value)} />
          </Info>
        </Travel>
        <Travel>
          <Direction from={dest.city} to={origin.city} />
          <Info>
            <RangeTimePicker {...dest} onChange={value => this.onChange('dest', value)} />
          </Info>
        </Travel>
      </Filter>
    );
  }
}
