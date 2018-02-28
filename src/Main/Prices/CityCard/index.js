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
  margin-top: 24px;
  padding-bottom: 8px;
  border-bottom: ${p => (p.types.last ? "none" : "0.5px dashed #afbec6")};

  ${media.lg`
    margin-top: 26px;
    border-bottom: none;
    border-right: ${props =>
      props.types.lastInRow ? "0.5px dashed #afbec6;" : "none"};
    padding-right: ${props => (props.types.lastInRow ? "34px" : "0")};
    padding-left: ${props => (props.types.threeMultiple ? "0" : "18px")};

    padding-bottom: 0;
    margin-bottom: 8px;
  `};
`;

export default props => (
  <CityCard types={props.types}>
    <Header data={props.data} />
    <Prices prices={props.data.prices} />
  </CityCard>
);
