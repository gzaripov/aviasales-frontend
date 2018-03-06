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

  ${media.lg`
    width: calc(20% - 2px);
  `};
`;

const Departure = styled(City)`
  border-radius: 4px 4px 0 0;

  ${media.sm`
    border-radius: 4px 0 0 0;
  `};

  ${media.lg`
    border-radius: 4px 0 0 4px;
  `};
`;

const Arrival = styled(City)`
  ${media.sm`
    border-radius: 0 4px 0 0;
  `};

  ${media.lg`
   border-radius: 0;
  `};
`;

export const ArrivalCity = () => (
  <Arrival>
    <Input placeholder='Город прибытия' />
    <Index />
  </Arrival>
);

export const DepartureCity = () => (
  <Departure>
    <Input value='Москва' placeholder='Город вылета' />
    <Index>mow</Index>
    <SwapButton>
      <img src={arrow} alt='Swap cities button' />
    </SwapButton>
  </Departure>
);
