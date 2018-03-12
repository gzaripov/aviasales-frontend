import React from 'react';
import styled from 'styled-components';
import media from '../../../common/media';
import { DepartureCity, ArrivalCity } from './City';
import Dates from '../../../Header/Dates';
import PassengerAndClass from './PassengerAndClass';

const Form = styled.form`
  margin: -2px;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const FlightDates = styled(Dates)`
  ${media.sm`
    width: calc(50% - 2px);
  `};

  ${media.lg`
    width: calc(35% - 2px);
  `};

  ${media.xl`
    width: calc(35% - 2px);
  `};
`;

export default () => (
  <Form>
    <DepartureCity />
    <ArrivalCity />
    <FlightDates />
    <PassengerAndClass />
  </Form>
);
