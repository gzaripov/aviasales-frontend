import React from 'react';
import Range from 'rc-slider/lib/Range';
import PropTypes from 'prop-types';
import 'rc-slider/assets/index.css';
import './index.css';

function countStep(min, max) {
  return (max - min) / 1000;
}

const RangePicker = props => (
  <Range {...props} step={countStep(props.min, props.max)} allowCross={false} />
);

RangePicker.defaultProps = {
  min: 0,
  max: 100,
};

RangePicker.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

export default RangePicker;
