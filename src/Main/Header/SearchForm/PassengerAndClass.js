import React from 'react';
import styled from 'styled-components';
import media from '../../../common/media';
import arrowDown from './icons/arrow_down.svg';

const Text = styled.span``;

const SecondaryText = styled.span`
  color: #a0b0b9;
`;

const PassengerAndClass = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  margin: 1px;
  width: 100%;
  padding: 19px 16px;
  border-radius: 0 0 4px 4px;

  ${media.sm`
    width: calc(50% - 2px);
    border-radius: 0 0 4px 0;
  `};

  ${media.lg`
    width: calc(25% - 2px);
    border-radius: 0 4px 4px 0;
  `};
`;

const ArrowDown = styled.img`
  margin-left: auto;
`;

export default () => (
  <PassengerAndClass>
    <Text>1 пассажир,&nbsp;</Text>
    <SecondaryText>эконом</SecondaryText>
    <ArrowDown src={arrowDown} alt="Arrow" />
  </PassengerAndClass>
);
