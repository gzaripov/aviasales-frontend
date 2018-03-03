import React from "react";
import styled from "styled-components";
import media from "../../../common/media";
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

const CityPriceContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const CityPrice = props => (
  <CityPriceContainer>
    <From>{props.data.from}</From>
    <Price>от {props.data.price} ₽</Price>
  </CityPriceContainer>
);

const PricesBox = styled.div`
  padding-top: 24px;
`;

const Prices = props => (
  <PricesBox>
    {props.prices.map((price, i) => <CityPrice data={price} key={i} />)}
  </PricesBox>
);

const CityCard = styled.div`
  ${media.lg`
    flex: 1;
  `};
`;

export default props => (
  <CityCard className={props.className} types={props.types}>
    <Header data={props.data} />
    <Prices prices={props.data.prices} />
  </CityCard>
);
