import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import aircraftLeft from './img/aircraft-left.svg';
import aircraftRight from './img/aircraft-right.svg';
import clock from './img/clock.svg';
import Duration from '../../../common/Duration';

const FlightStyled = styled.div`
  display: flex;
  padding: 0 8px;
`;

const FlightTime = styled.time`
  display: flex;
  margin-top: 10px;
  line-height: 18px;
  font-size: 14px;
  text-align: left;
  margin-right: 16px;
`;

const FlightType = styled.p`
  margin-top: 10px;
  margin-left: auto;
  line-height: 18px;
  font-size: 14px;
  text-align: right;
`;

const Icon = styled.img`
  margin-right: 8px;
`;

function formatTime(timestamp) {
  return format(timestamp * 1000, 'HH:mm', {
    locale: ru,
  });
}

const Flight = props => (
  <FlightStyled>
    <FlightTime>
      <Icon src={props.direction === 'return' ? aircraftLeft : aircraftRight} alt="Aircraft" />
      {formatTime(props.data.origin.timestamp)}
      {' — '}
      {formatTime(props.data.dest.timestamp)}
    </FlightTime>
    <FlightTime>
      <Icon src={clock} alt="Clock" />
      <Duration duration={props.data.duration} />
    </FlightTime>
    <FlightType>{props.data.type}</FlightType>
  </FlightStyled>
);

Flight.propTypes = {
  direction: PropTypes.string.isRequired,
  data: PropTypes.shape({
    origin: PropTypes.shape({
      timestamp: PropTypes.number,
    }),
    dest: PropTypes.shape({
      timestamp: PropTypes.number,
    }),
    duration: PropTypes.number,
    type: PropTypes.string,
  }).isRequired,
};

export default Flight;
