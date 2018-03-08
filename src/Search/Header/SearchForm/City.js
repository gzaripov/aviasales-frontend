import React from 'react';
import styled from 'styled-components';
import media from '../../../common/media';
import Button from '../../../common/Button';
import arrow from './icons/arrow.svg';

const SwapButton = styled(Button)``;

const Index = styled.span`
  text-transform: uppercase;
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
  margin-left: auto;
  margin-right: 12px;
`;

const Input = styled.input`
  width: 100%;
`;

const City = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  margin: 1px;
  width: 100%;
  padding: 18px 16px;

  ${media.sm`
    width: calc(50% - 2px);
  `};

  ${media.xl`
    width: calc(18% - 2px);
  `};
`;

const Departure = City.extend`
  border-radius: 4px 0 0;

  ${media.xl`
    border-radius: 4px 0 0 4px;
  `};
`;

const Arrival = City.extend`
  border-radius: 0 4px 0 0;

  ${media.xl`
    border-radius: 0;
  `};
`;

export const DepartureCity = () => (
  <Departure>
    <Input defaultValue="Москва" placeholder="Город вылета" />
    <Index>mow</Index>
    <SwapButton>
      <img src={arrow} alt="Swap cities button" />
    </SwapButton>
  </Departure>
);

export const ArrivalCity = () => (
  <Arrival>
    <Input placeholder="Город прибытия" />
    <Index />
  </Arrival>
);
