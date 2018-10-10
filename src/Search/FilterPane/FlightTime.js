import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  static defaultProps = {
    dirty: false,
    onChange: () => {},
    onClear: () => {},
    origin: {
      takeoff: {
        range: [0, 0],
        boundaries: [0, 0],
      },
      landing: {
        range: [0, 0],
        boundaries: [0, 0],
      },
    },
    dest: {
      takeoff: {
        range: [0, 0],
        boundaries: [0, 0],
      },
      landing: {
        range: [0, 0],
        boundaries: [0, 0],
      },
    },
  };

  static propTypes = {
    origin: PropTypes.shape({
      takeoff: PropTypes.shape({
        range: PropTypes.arrayOf(PropTypes.number),
        boundaries: PropTypes.arrayOf(PropTypes.number),
      }),
      landing: PropTypes.shape({
        range: PropTypes.arrayOf(PropTypes.number),
        boundaries: PropTypes.arrayOf(PropTypes.number),
      }),
    }),
    dest: PropTypes.shape({
      takeoff: PropTypes.shape({
        range: PropTypes.arrayOf(PropTypes.number),
        boundaries: PropTypes.arrayOf(PropTypes.number),
      }),
      landing: PropTypes.shape({
        range: PropTypes.arrayOf(PropTypes.number),
        boundaries: PropTypes.arrayOf(PropTypes.number),
      }),
    }),
    dirty: PropTypes.bool,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
  };

  onChange = (path, range) => {
    this.props.onChange(`${path}.range`, range);
  };

  render() {
    const {
      origin, dest, dirty, onClear,
    } = this.props;
    return (
      <Filter title="Время вылета и прибытия" dirty={dirty} onClear={onClear} initialOpened>
        <Flight>
          <Direction from="Москва" to="Барселона" />
          <Info>
            <Text>Вылет из Москвы:</Text>
            <RangeDataPicker
              range={origin.takeoff.range}
              boundaries={origin.takeoff.boundaries}
              onChange={range => this.onChange('origin.takeoff', range)}
            />
          </Info>
          <Info>
            <Text>Прибытие в Барселону:</Text>
            <RangeDataPicker
              range={origin.landing.range}
              boundaries={origin.landing.boundaries}
              onChange={range => this.onChange('origin.landing', range)}
            />
          </Info>
        </Flight>
        <Flight>
          <Direction from="Барселона" to="Москва" />
          <Info>
            <Text>Вылет из Барселоны:</Text>
            <RangeDataPicker
              range={dest.takeoff.range}
              boundaries={dest.takeoff.boundaries}
              onChange={range => this.onChange('dest.takeoff', range)}
            />
          </Info>
          <Info>
            <Text>Прибытие в Москву:</Text>
            <RangeDataPicker
              range={dest.landing.range}
              boundaries={dest.landing.boundaries}
              onChange={range => this.onChange('dest.landing', range)}
            />
          </Info>
        </Flight>
      </Filter>
    );
  }
}
