import React from 'react';
import styled from 'styled-components';
import Direction from './Direction';
import Filter from './Filter';
import RangeDataPicker from './RangeDatePicker';

const Flight = styled.div`
  margin-top: 10px;
  margin-bottom: 24px;
`;

const Info = styled.div`
  padding-top: 16px;
`;

const Text = styled.p`
  line-height: 18px;
  text-align: left;
  font-size: 12px;
  color: #323333;
  margin-bottom: 4px;
`;

export default class extends React.Component {
  state = {
    originTakeoff: {
      min: 1519419900,
      max: 1519505100,
      range: [1519419900, 1519505100],
    },
    originLanding: {
      min: 1519430700,
      max: 1519642200,
      range: [1519430700, 1519642200],
    },
    destTakeoff: {
      min: 1520046000,
      max: 1519505100,
      range: [1520046000, 1519505100],
    },
    destLanding: {
      min: 1520078400,
      max: 1520232900,
      range: [1520078400, 1520232900],
    },
  };

  onChange = (type, range) => {
    this.setState((prevState) => {
      const { min, max } = prevState[type];
      const newState = prevState;
      newState[type] = {
        min,
        max,
        range,
      };
      return newState;
    });
  };

  render() {
    const {
      originTakeoff, originLanding, destTakeoff, destLanding,
    } = this.state;
    return (
      <Filter title="Время вылета и прибытия" initialOpened>
        <Flight>
          <Direction from="Москва" to="Барселона" />
          <Info>
            <Text>Вылет из Москвы:</Text>
            <RangeDataPicker
              {...originTakeoff}
              onChange={value => this.onChange('originTakeoff', value)}
            />
          </Info>
          <Info>
            <Text>Прибытие в Барселону:</Text>
            <RangeDataPicker
              {...originLanding}
              onChange={value => this.onChange('originLanding', value)}
            />
          </Info>
        </Flight>
        <Flight>
          <Direction from="Барселона" to="Москва" />
          <Info>
            <Text>Вылет из Барселоны:</Text>
            <RangeDataPicker
              {...destTakeoff}
              onChange={value => this.onChange('destTakeoff', value)}
            />
          </Info>
          <Info>
            <Text>Прибытие в Москву:</Text>
            <RangeDataPicker
              {...destLanding}
              onChange={value => this.onChange('destLanding', value)}
            />
          </Info>
        </Flight>
      </Filter>
    );
  }
}
