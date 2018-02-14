import React from "react";
import styled from "styled-components";
import CityCard from "./CityCard";

import flagRu from "./flags/ru.svg";
import flagAm from "./flags/am.svg";
import flagMd from "./flags/md.svg";

const citiesData = [
  {
    city: "Симферополь (Крым)",
    country: "Крым",
    flag: flagRu,
    prices: [
      {
        from: "Из Москвы",
        price: "4 813"
      },
      {
        from: "Из Санкт-Петербурга",
        price: "7 857"
      },
      {
        from: "Из Новосибирска",
        price: "15 127"
      },
      {
        from: "Из Екатеринбурга",
        price: "9 275"
      },
      {
        from: "Из Челябинска",
        price: "9 148"
      }
    ]
  },
  {
    city: "Ереван",
    country: "Армения",
    flag: flagAm,
    prices: [
      {
        from: "Из Москвы",
        price: "4 758"
      },
      {
        from: "Из Санкт-Петербурга",
        price: "9 932"
      },
      {
        from: "Из Сочи",
        price: "11 951"
      },
      {
        from: "Из Краснодара",
        price: "11 741"
      },
      {
        from: "Из Ростова-на-дону",
        price: "11 956"
      }
    ]
  },
  {
    city: "Кишинёв",
    country: "Молдавия",
    flag: flagMd,
    prices: [
      {
        from: "Из Москвы",
        price: "8 319"
      },
      {
        from: "Из Санкт-Петербурга",
        price: "10 800"
      },
      {
        from: "Из Краснодара",
        price: "12 098"
      },
      {
        from: "Из Сургута",
        price: "16 277"
      },
      {
        from: "Из Нового Уренгоя",
        price: "15 987"
      }
    ]
  }
];

const CityCards = styled.div`
  padding-top: 16px;
`;

export default () => (
  <CityCards>
    {citiesData.map((o, i) => <CityCard cardData={o} key={i} />)}
  </CityCards>
);
