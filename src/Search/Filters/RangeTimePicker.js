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
  range, boundaries, onChange, className,
}) => (
  <div className={className}>
    <Period>
      <Time>
        от <Duration duration={range[0]} />
      </Time>
      <Time>
        до <Duration duration={range[1]} />
      </Time>
    </Period>
    <RangePicker onChange={onChange} range={range} boundaries={boundaries} />
  </div>
);

RangeDataPicker.defaultProps = {
  range: [20, 100],
  boundaries: [20, 1000],
  onChange: () => {},
  className: '',
};

RangeDataPicker.propTypes = {
  range: PropTypes.arrayOf(PropTypes.number),
  boundaries: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default RangeDataPicker;
