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
    dirty: false,
    onChange: () => {},
    onClear: () => {},
    range: [0, 0],
    boundaries: [0, 0],
  };

  static propTypes = {
    range: PropTypes.arrayOf(PropTypes.number),
    boundaries: PropTypes.arrayOf(PropTypes.number),
    dirty: PropTypes.bool,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
  };

  onChange = (range) => {
    this.props.onChange('range', range);
  };

  render() {
    const {
      range, boundaries, dirty, onClear,
    } = this.props;
    return (
      <Filter title="Длительность пересадки" dirty={dirty} onClear={onClear}>
        <RangePicker range={range} boundaries={boundaries} onChange={this.onChange} />
      </Filter>
    );
  }
}
