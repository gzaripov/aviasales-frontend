import React from 'react';
import styled from 'styled-components';
import Range from './Range';
import Direction from './Direction';
import Filter from './Filter';

const Flight = styled.div`
  margin-top: 10px;
  margin-bottom: 24px;
`;

const Info = styled.div`
  padding-top: 16px;
`;

const Text = styled.p`
  line-height: 18px;
  text-align: left;
  font-size: 12px;
  color: #323333;
  margin-bottom: 4px;
`;

const Time = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const DepartureTime = styled.p`
  line-height: 18px;
  font-size: 12px;
  margin: 0;
  color: #323333;
`;

const ArrivalTime = styled.p`
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  margin: 0;
`;

export default () => (
  <Filter title="Время вылета и прибытия" opened>
    <Flight>
      <Direction from="Москва" to="Барселона" />
      <Info>
        <Text>Вылет из Москвы:</Text>
        <Time>
          <DepartureTime>c 00:05, 24 фев</DepartureTime>
          <ArrivalTime>до 23:45, 24 фев</ArrivalTime>
        </Time>
        <Range />
      </Info>
      <Info>
        <Text>Прибытие в Барселону:</Text>
        <Time>
          <DepartureTime>c 00:05, 24 фев</DepartureTime>
          <ArrivalTime>до 23:45, 24 фев</ArrivalTime>
        </Time>
        <Range />
      </Info>
    </Flight>
    <Flight>
      <Direction from="Барселона" to="Москва" />
      <Info>
        <Text>Вылет из Барселоны:</Text>
        <Time>
          <DepartureTime>c 00:05, 24 фев</DepartureTime>
          <ArrivalTime>до 23:45, 24 фев</ArrivalTime>
        </Time>
        <Range />
      </Info>
      <Info>
        <Text>Прибытие в Москву:</Text>
        <Time>
          <DepartureTime>c 00:05, 24 фев</DepartureTime>
          <ArrivalTime>до 23:45, 24 фев</ArrivalTime>
        </Time>
        <Range />
      </Info>
    </Flight>
  </Filter>
);
