import React from "react";
import styled from "styled-components";
import media from "../../common/media";
import Header from "./Header";

const From = styled.span`
  line-height: 20px;
  font-size: 16px;
`;

const Price = styled.a`
  margin-left: auto;
  text-decoration: none;
  font-size: 14px;
  color: #00bae8;
  margin-bottom: 4px;
`;

const CityPriceBox = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const CityPrice = props => (
  <CityPriceBox>
    <From>{props.data.from}</From>
    <Price>от {props.data.price} ₽</Price>
  </CityPriceBox>
);

const PricesBox = styled.div`
  padding-top: 16px;
  @media screen and (min-width: ${media.md}) {
    margin-top: 26px;
  }
`;

const Prices = props => (
  <PricesBox>
    {props.prices.map((o, i) => <CityPrice data={o} key={i} />)}
  </PricesBox>
);

const CityCard = styled.div`
  margin-top: 24px;
  padding-bottom: 8px;
  border-bottom: 0.5px dashed #afbec6;
`;

export default props => (
  <CityCard>
    <Header cardData={props.cardData} />
    <Prices prices={props.cardData.prices} />
  </CityCard>
);
