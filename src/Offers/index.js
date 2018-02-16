import React from "react";
import styled from "styled-components";
import OfferCard from "./OfferCard";
import OfferFooter from "./OfferFooter";

const offers = [
  {
    title: "Билеты от 499 рублей!",
    icon: "",
    aviaCompanyPic: "/img/avia/pobeda.png",
    price: "499 ₽",
    daysLeft: "45 дней",
    description:
      "Билеты от 499 рублей! \nСпециальное предложение от авиакомпании Победа"
  },
  {
    title: "В Нью-Йорк от 20 680 ₽",
    icon: "/img/avia/lufthansa_icon.png",
    aviaCompanyPic: "/img/avia/lufthansa.png",
    price: "20 680 ₽",
    daysLeft: "19 дней",
    description:
      "Из Москвы в США от 20680 рублей! Специальное предложение от авиакомпании Lufthansa"
  },
  {
    title: "В Лос-Анджелес от 22360 ₽",
    icon: "/img/avia/lufthansa_icon.png",
    aviaCompanyPic: "/img/avia/lufthansa.png",
    price: "20 360 ₽",
    daysLeft: "19 дней",
    description:
      "Из Москвы в США от 22360 рублей! Специальное предложение от авиакомпании Lufthansa"
  }
];

const Offers = styled.section`
  background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 28px;
  color: #ffffff;
  margin-top: 16px;
  margin-bottom: 24px;
  text-align: left;
`;

export default () => (
  <Offers>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Title>Спецпредложения на авиабилеты</Title>
        </div>

        {offers.map((o, i) => (
          <div className="col-xs-12 col-md-4">
            <OfferCard offer={o} key={i} />
          </div>
        ))}

        <div className="col-xs-12">
          <OfferFooter />
        </div>
      </div>
    </div>
  </Offers>
);
