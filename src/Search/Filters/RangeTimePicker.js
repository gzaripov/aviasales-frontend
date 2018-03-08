import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RangePicker from './RangePicker';
import Duration from '../../common/Duration';

const Period = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const Time = styled.p`
  line-height: 18px;
  font-size: 12px;
  margin: 0;
  color: #323333;
`;

const RangeDataPicker = ({
  min, max, range, onChange,
}) => (
  <div>
    <Period>
      <Time>
        от <Duration duration={range[0]} />
      </Time>
      <Time>
        до <Duration duration={range[1]} />
      </Time>
    </Period>
    <RangePicker onChange={onChange} value={range} min={min} max={max} />
  </div>
);

RangeDataPicker.defaultProps = {
  min: 20,
  max: 1000,
  range: [20, 100],
  onChange: () => {},
};

RangeDataPicker.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  range: PropTypes.arrayOf(PropTypes.number, PropTypes.number),
  onChange: PropTypes.func,
};

export default RangeDataPicker;
