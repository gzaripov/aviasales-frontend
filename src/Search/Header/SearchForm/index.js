import React from 'react';
import styled from 'styled-components';
import media from '../../../common/media';
import { DepartureCity, ArrivalCity } from './City';
import Dates from '../../../Header/Dates';
import PassengerAndClass from '../../../Header/PassengerAndClass';
import SearchButton from './SearchButton';

const Form = styled.form`
  display: none;
  flex: 1;
  justify-content: flex-end;
  flex-wrap: wrap;
  position: relative;

  ${media.sm`
    display: flex;
    justify-center: center;
  `};
`;

export default () => (
  <Form>
    <DepartureCity />
    <ArrivalCity />
    <Dates />
    <PassengerAndClass />
    <SearchButton />
  </Form>
);
