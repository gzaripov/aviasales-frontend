import React from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Checkbox from "./Checkbox";

const alliances = [
  {
    label: "Все",
    price: ""
  },
  {
    label: "Star Alliance",
    price: "11 150 ₽"
  },
  {
    label: "OneWorld",
    price: "12 370 ₽"
  },
  {
    label: "SkyTeam",
    price: "16 290 ₽"
  }
];

const airlines = [
  {
    label: "Все",
    price: ""
  },
  {
    label: "Aegean Airlines",
    price: "7 712 ₽"
  },
  {
    label: "Air Algerie",
    price: "29 105 ₽"
  },
  {
    label: "Air France",
    price: "17 050 ₽"
  },
  {
    label: "Air Moldova",
    price: "22 613 ₽"
  },
  {
    label: "Alitalia",
    price: "23 712 ₽"
  },
  {
    label: "Alitalia CityLiner",
    price: "20 271 ₽"
  },
  {
    label: "Belle Air",
    price: "18 371 ₽"
  },
  {
    label: "British Airways",
    price: "23 839 ₽"
  },
  {
    label: "Brussels Airlines",
    price: "11 150 ₽"
  },
  {
    label: "Bulgaria Air",
    price: "20 114 ₽"
  }
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
  <Airlines title="Авиакомпании" opened={true}>
    <Checkbox text="Несколько авиакомпаний" checked={false} />
    <Text>
      Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями,
      включая выбранную
    </Text>
    <Title>Альянсы</Title>
    {alliances.map((alliance, index) => (
      <Check key={index}>
        <Checkbox checked={true} text={alliance.label} />
        <Price>{alliance.price}</Price>
      </Check>
    ))}
    <Title>Авиакомпании</Title>
    {airlines.map((airline, index) => (
      <Check key={index}>
        <Checkbox checked={true} text={airline.label} />
        <Price>{airline.price}</Price>
      </Check>
    ))}
  </Airlines>
);
