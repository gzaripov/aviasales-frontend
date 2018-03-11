import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Filter from './Filter';
import RangeTimePicker from './RangeTimePicker';

const RangePicker = styled(RangeTimePicker)`
  padding-top: 5px;
  padding-bottom: 20px;
`;

export default class extends React.Component {
  static defaultProps = {
    onChange: () => {},
  };

  static propTypes = {
    range: PropTypes.arrayOf(PropTypes.number).isRequired,
    boundaries: PropTypes.arrayOf(PropTypes.number).isRequired,
    onChange: PropTypes.func,
  };

  onChange = (range) => {
    this.props.onChange('transferDuration.range', range);
  };

  render() {
    const { range, boundaries } = this.props;
    return (
      <Filter title="Длительность пересадки">
        <RangePicker range={range} boundaries={boundaries} onChange={this.onChange} />
      </Filter>
    );
  }
}
