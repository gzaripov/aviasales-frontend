import React from "react";
import styled from "styled-components";
import Flex from "../common/Flex";

const Flag = styled.div`
  width: 34px;
  height: 34px;
  background-image: ${props => `url(${props.url})`};
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 12px;
`;

const City = styled.span`
  font-weight: 500;
  line-height: 32px;
  font-size: 22px;
  color: #5b5b5c;
`;

const Country = styled.span`
  line-height: 20px;
  font-size: 12px;
  color: #a0b0b9;
  align-self: flex-start;
  text-transform: uppercase;
`;

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

const Header = props => (
  <Flex alignItems="center">
    <Flag url={props.cardData.flag} />
    <Flex flexDirection="column">
      <City>{props.cardData.city}</City>
      <Country>{props.cardData.country}</Country>
    </Flex>
  </Flex>
);

const CityPriceBox = styled(Flex)`
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
