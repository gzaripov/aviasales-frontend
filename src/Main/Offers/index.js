import React from "react";
import styled from "styled-components";
import media from "../../common/media";
import OfferCard from "./OfferCard";
import OfferFooter from "./OfferFooter";

const offers = [
  {
    title: "Билеты от 499 рублей!",
    icon: "",
    aviaCompanyPic: "/img/avia/pobeda.png",
    price: "499 ₽",
    daysLeft: "45 дней",
    from: "Специальное предложение от авиакомпании Победа",
    text: "Билеты от 499 рублей!"
  },
  {
    title: "В Нью-Йорк от 20 680 ₽",
    icon: "/img/avia/lufthansa_icon.png",
    aviaCompanyPic: "/img/avia/lufthansa.png",
    price: "20 680 ₽",
    daysLeft: "19 дней",
    from: "Специальное предложение от авиакомпании Lufthansa",
    text: "Из Москвы в США от 20680 рублей!"
  },
  {
    title: "В Лос-Анджелес от 22360 ₽",
    icon: "/img/avia/lufthansa_icon.png",
    aviaCompanyPic: "/img/avia/lufthansa.png",
    price: "20 360 ₽",
    daysLeft: "19 дней",
    from: " Специальное предложение от авиакомпании Lufthansa",
    text: "Из Москвы в США от 22360 рублей!"
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

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  ${media.md`
    flex-direction: row;
    justify-content: space-between;
  `};
`;

export default () => (
  <Offers id="offers">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-lg-10 col-lg-offset-1">
          <Title>Спецпредложения на авиабилеты</Title>
          <Cards>
            {offers.map((offer, index) => (
              <OfferCard offer={offer} key={index} />
            ))}
          </Cards>
          <OfferFooter />
        </div>
      </div>
    </div>
  </Offers>
);
