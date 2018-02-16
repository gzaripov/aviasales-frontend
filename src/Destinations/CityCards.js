import React from "react";
import styled from "styled-components";
import Card from "./CityCard";
import media from "../common/media";
import krasnodar from "./cities/krasnodar.png";
import sochi from "./cities/sochi.jpeg";
import spb from "./cities/spb.jpeg";
import mrv from "./cities/mrv.jpeg";
import sip from "./cities/sip.jpeg";
import barsa from "./cities/barsa.jpeg";

const cardsData = [
  {
    country: "Россия",
    city: "Краснодар",
    price: "1 212",
    date: "18 марта",
    imageUrl: krasnodar
  },
  {
    country: "Россия",
    city: "Сочи (Адлер)",
    price: "1 334",
    date: "17 марта",
    imageUrl: sochi
  },
  {
    country: "Россия",
    city: "Санкт-Петербург",
    price: "1 508",
    date: "19 марта",
    imageUrl: spb
  },
  {
    country: "Россия",
    city: "Минеральные Воды",
    price: "2 074",
    date: "13 марта",
    imageUrl: mrv
  },
  {
    country: "Россия",
    city: "Симферополь",
    price: "2 407",
    date: "13 марта",
    imageUrl: sip
  },
  {
    country: "Испания",
    city: "Барселона",
    price: "4 247",
    date: "24 марта",
    imageUrl: barsa
  }
];

const CityCards = styled.div`
  margin-top: 28px;
  @media screen and (min-width: ${media.md}) {
    margin-top: 50px;
  }
`;

export default () => (
  <CityCards>
    <div className="container">
      <div className="row">
        {cardsData.map((o, i) => (
          <div className="col-xs-12">
            <Card cardData={o} key={i} />
          </div>
        ))}
      </div>
    </div>
  </CityCards>
);
