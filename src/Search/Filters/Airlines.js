import React from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import Filter from './Filter';
import Checkbox from './Checkbox';

const alliances = [
  {
    id: 0,
    label: 'Все',
  },
  {
    id: 1,
    label: 'Star Alliance',
    price: 11150,
  },
  {
    id: 2,
    label: 'OneWorld',
    price: 12370,
  },
  {
    id: 3,
    label: 'SkyTeam',
    price: 16290,
  },
];

const airlines = [
  {
    id: 4,
    label: 'Все',
  },
  {
    id: 5,
    label: 'Aegean Airlines',
    price: 7712,
  },
  {
    id: 6,
    label: 'Air Algerie',
    price: 29105,
  },
  {
    id: 7,
    label: 'Air France',
    price: 17050,
  },
  {
    id: 8,
    label: 'Air Moldova',
    price: 22613,
  },
  {
    id: 9,
    label: 'Alitalia',
    price: 23712,
  },
  {
    id: 10,
    label: 'Alitalia CityLiner',
    price: 20271,
  },
  {
    id: 11,
    label: 'Belle Air',
    price: 18371,
  },
  {
    id: 12,
    label: 'British Airways',
    price: 23839,
  },
  {
    id: 13,
    label: 'Brussels Airlines',
    price: 11150,
  },
  {
    id: 14,
    label: 'Bulgaria Air',
    price: 20114,
  },
];

const Check = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  font-size: 12px;
  color: #4a4a4a;
`;

const Price = styled.p`
  font-size: 12px;
  color: #a0b0b9;
`;

const Text = styled.p`
  margin-top: 12px;
  margin-bottom: 8px;
  text-align: left;
  line-height: 16px;
  font-size: 12px;
  padding-right: 24px;
`;

const Title = styled.h4`
  margin: 16px 0 8px;
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  text-align: left;
`;

const Airlines = styled(Filter)`
  padding-bottom: 16px;
`;

export default () => (
  <Airlines title="Авиакомпании" opened>
    <Checkbox text="Несколько авиакомпаний" />
    <Text>
      Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая выбранную
    </Text>
    <Title>Альянсы</Title>
    {alliances.map(alliance => (
      <Check key={alliance.id}>
        <Checkbox text={alliance.label} />
        {alliance.price && (
          <Price>
            <FormattedNumber
              value={alliance.price}
              style={['currency']}
              currency="RUB"
              minimumFractionDigits={0}
              maximumFractionDigits={0}
            />
          </Price>
        )}
      </Check>
    ))}
    <Title>Авиакомпании</Title>
    {airlines.map(airline => (
      <Check key={airline.id}>
        <Checkbox text={airline.label} />
        {airline.price && (
          <Price>
            <FormattedNumber
              value={airline.price}
              style={['currency']}
              currency="RUB"
              minimumFractionDigits={0}
              maximumFractionDigits={0}
            />
          </Price>
        )}
      </Check>
    ))}
  </Airlines>
);
