import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Direction from './Direction';
import Filter from './Filter';
import RangeTimePicker from './RangeTimePicker';

const RangePicker = styled(RangeTimePicker)`
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
    this.props.onChange(`${path}.range`, range);
  };

  render() {
    const { origin, dest } = this.props;
    return (
      <Filter title="Время в пути" initialOpened>
        <Travel>
          <Direction from={origin.city} to={dest.city} />
          <RangePicker
            range={origin.range}
            boundaries={origin.boundaries}
            onChange={range => this.onChange('origin', range)}
          />
        </Travel>
        <Travel>
          <Direction from={dest.city} to={origin.city} />
          <RangePicker
            range={dest.range}
            boundaries={dest.boundaries}
            onChange={range => this.onChange('dest', range)}
          />
        </Travel>
      </Filter>
    );
  }
}
