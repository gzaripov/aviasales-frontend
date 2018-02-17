import React from "react";
import styled from "styled-components";
import Card from "./CityCard";
import media from "../../common/media";
import krasnodar from "./cities/krasnodar.png";
import sochi from "./cities/sochi.jpeg";
import spb from "./cities/spb.jpeg";
import mrv from "./cities/mrv.jpeg";
import sip from "./cities/sip.jpeg";
import barsa from "./cities/barsa.jpeg";
import flagRu from "./flags/ru.png";
import flagSp from "./flags/sp.png";

const cardsData = [
  {
    country: "Россия",
    flag: flagRu,
    city: "Краснодар",
    price: "1 212",
    date: "18 марта",
    imageUrl: krasnodar
  },
  {
    country: "Россия",
    flag: flagRu,
    city: "Сочи (Адлер)",
    price: "1 334",
    date: "17 марта",
    imageUrl: sochi
  },
  {
    country: "Россия",
    flag: flagRu,
    city: "Санкт-Петербург",
    price: "1 508",
    date: "19 марта",
    imageUrl: spb
  },
  {
    country: "Россия",
    flag: flagRu,
    city: "Минеральные Воды",
    price: "2 074",
    date: "13 марта",
    imageUrl: mrv
  },
  {
    country: "Россия",
    flag: flagRu,
    city: "Симферополь",
    price: "2 407",
    date: "13 марта",
    imageUrl: sip
  },
  {
    country: "Испания",
    flag: flagSp,
    city: "Барселона",
    price: "4 247",
    date: "24 марта",
    imageUrl: barsa
  }
];

const CityCards = styled.div`
  margin-top: 28px;
  ${media.md`
    margin-top: 50px;
  `};
`;

export default () => (
  <CityCards>
    <div className="container">
      <div className="row">
        {cardsData.map((o, i) => (
          <div className="col-xs-12 col-lg-6">
            <Card cardData={o} key={i} />
          </div>
        ))}
      </div>
    </div>
  </CityCards>
);
