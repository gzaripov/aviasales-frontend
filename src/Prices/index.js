import React from "react";
import Header from "./Header";
import Advice from "./Advice";
import CityCard from "./CityCard";

import flagRu from "./flags/ru.png";
import flagAm from "./flags/am.svg";
import flagMd from "./flags/md.png";

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

export default () => (
  <section id="prices">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Header />
        </div>
      </div>
      <div className="row">
        {citiesData.map((o, i) => (
          <div className="col-xs-12 col-lg-4">
            <CityCard cardData={o} key={i} id={i} />
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-xs-12 col-lg-8 col-lg-offset-2">
          <Advice />
        </div>
      </div>
    </div>
  </section>
);
