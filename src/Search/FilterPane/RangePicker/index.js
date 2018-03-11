import React from 'react';
import Range from 'rc-slider/lib/Range';
import PropTypes from 'prop-types';
import 'rc-slider/assets/index.css';
import './index.css';

function countStep(min, max) {
  return (max - min) / 100;
}

const RangePicker = ({ range, boundaries, ...props }) => (
  <Range
    value={range}
    min={boundaries[0]}
    max={boundaries[1]}
    step={countStep(...boundaries)}
    allowCross={false}
    {...props}
  />
);

RangePicker.defaultProps = {
  boundaries: [0, 100],
  range: [0, 100],
};

RangePicker.propTypes = {
  boundaries: PropTypes.arrayOf(PropTypes.number),
  range: PropTypes.arrayOf(PropTypes.number),
};

export default RangePicker;
