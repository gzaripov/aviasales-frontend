import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  static defaultProps = {
    onChange: () => {},
  };

  static propTypes = {
    origin: PropTypes.shape({
      city: PropTypes.string,
      range: PropTypes.arrayOf(PropTypes.number),
      boundaries: PropTypes.arrayOf(PropTypes.number),
    }).isRequired,
    dest: PropTypes.shape({
      city: PropTypes.string,
      range: PropTypes.arrayOf(PropTypes.number),
      boundaries: PropTypes.arrayOf(PropTypes.number),
    }).isRequired,
    onChange: PropTypes.func,
  };

  onChange = (path, range) => {
    this.props.onChange(`travelTime.${path}.range`, range);
  };

  render() {
    const { origin, dest } = this.props;
    return (
      <Filter title="Время в пути" initialOpened>
        <Travel>
          <Direction from={origin.city} to={dest.city} />
          <Info>
            <RangeTimePicker
              range={origin.range}
              boundaries={origin.boundaries}
              onChange={value => this.onChange('origin', value)}
            />
          </Info>
        </Travel>
        <Travel>
          <Direction from={dest.city} to={origin.city} />
          <Info>
            <RangeTimePicker
              range={dest.range}
              boundaries={dest.boundaries}
              onChange={value => this.onChange('dest', value)}
            />
          </Info>
        </Travel>
      </Filter>
    );
  }
}
