import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ru from 'date-fns/locale/ru';
import { format } from 'date-fns';
import RangePicker from './RangePicker';

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

function formatDate(timestamp) {
  return format(timestamp * 1000, 'HH:mm, D MMM', {
    locale: ru,
  });
}

const RangeDataPicker = ({ boundaries, range, onChange }) => (
  <div>
    <Period>
      <Time>с {formatDate(range[0])}</Time>
      <Time>до {formatDate(range[1])}</Time>
    </Period>
    <RangePicker onChange={onChange} value={range} boundaries={boundaries} />
  </div>
);

RangeDataPicker.defaultProps = {
  onChange: () => {},
};

RangeDataPicker.propTypes = {
  boundaries: PropTypes.arrayOf(PropTypes.number).isRequired,
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func,
};

export default RangeDataPicker;
