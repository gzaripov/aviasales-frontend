import React from "react";
import styled from "styled-components";
import media from "../common/media";
import Heading from "./Heading";
import CityCard from "./CityCard";
import Category from "./Category";

import compass from "./compass.svg";
import world from "./icons/world.svg";
import sun from "./icons/sun.svg";
import shopping from "./icons/shopping.svg";
import culture from "./icons/culture.svg";
import nightStyle from "./icons/night_style.svg";
import rest from "./icons/rest_kids.svg";

const cardsData = [
  {
    country: "Россия",
    flag: "/img/flags/ru.png",
    city: "Краснодар",
    price: "1 212",
    date: "18 марта",
    imageUrl: "/img/cities/krasnodar.jpg"
  },
  {
    country: "Россия",
    flag: "/img/flags/ru.png",
    city: "Сочи (Адлер)",
    price: "1 334",
    date: "17 марта",
    imageUrl: "/img/cities/sochi.jpg"
  },
  {
    country: "Россия",
    flag: "/img/flags/ru.png",
    city: "Санкт-Петербург",
    price: "1 508",
    date: "19 марта",
    imageUrl: "/img/cities/spb.jpg"
  },
  {
    country: "Россия",
    flag: "/img/flags/ru.png",
    city: "Минеральные Воды",
    price: "2 074",
    date: "13 марта",
    imageUrl: "/img/cities/mrv.jpg"
  },
  {
    country: "Россия",
    flag: "/img/flags/ru.png",
    city: "Симферополь",
    price: "2 407",
    date: "13 марта",
    imageUrl: "/img/cities/sip.jpg"
  },
  {
    country: "Испания",
    flag: "/img/flags/sp.png",
    city: "Барселона",
    price: "4 247",
    date: "24 марта",
    imageUrl: "/img/cities/barsa.jpg"
  }
];

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  margin-bottom: 28px;

  ${media.md`
    margin-top: 56px;
    margin-bottom: 50px;
    justify-content: space-around;
  `};
`;

const Destinations = styled.section`
  background-color: #f8fcff;
`;

const Icon = styled.img`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;

  ${media.md`
    margin-top: 56px;
    margin-bottom: 20px;
  `};
`;

export default () => (
  <Destinations id="destinations">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Icon src={compass} alt="Destination icon" />
          <Heading />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
          <Categories>
            <Category imageUrl={world} text="куда угодно" active />
            <Category imageUrl={sun} text="солнце и море" />
            <Category imageUrl={shopping} text="шоппинг, город" />
            <Category imageUrl={culture} text="культура и история" />
            <Category imageUrl={nightStyle} text="ночная жизнь" />
            <Category imageUrl={rest} text="отдых с детьми" />
          </Categories>
        </div>
      </div>
      <div className="row center-md">
        {cardsData.map((cardData, index) => (
          <div className="col-xs-12 col-md-10 col-lg-6 col-xl-5" key={index}>
            <CityCard data={cardData} />
          </div>
        ))}
      </div>
    </div>
  </Destinations>
);
