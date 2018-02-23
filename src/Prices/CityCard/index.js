import React from "react";
import styled from "styled-components";
import media from "../../common/media";
import Header from "./Header";

const City = styled.a`
  padding: 8px 0;
  line-height: 20px;
  flex-grow: 1;
  text-align: start;
  transition: color 0.3s;
  color: #4a4a4a;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  :hover {
    color: #ff8b00;
    text-decoration: underline;
  }
`;

const Price = styled.a`
  margin-left: auto;
  text-decoration: none;
  color: #00bae8;
  transition: color 0.3s;
  padding-left: 10px;
  white-space: nowrap;

  :hover {
    color: #ff8b00;
  }
`;

const CityPrice = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  padding: 0 8px;

  :hover {
    background-color: #f1fcff;
  }
`;

const Prices = styled.div`
  padding-top: 16px;

  ${media.md`
    margin-top: 26px;
  `};
`;

const CityCard = styled.div`
  margin-top: 24px;
  padding-bottom: 8px;
  border-bottom: 0.5px dashed #afbec6;

  ${media.lg`
    margin-top: 26px;
    border-bottom: none;
    border-right: ${props =>
      props.id === 0 || props.id % 2 !== 0 ? "0.5px dashed #afbec6;" : "none"};
    padding-right: ${props =>
      props.id === 0 || props.id % 2 !== 0 ? "34px" : "0"};
    padding-left: ${props =>
      props.id === 0 || props.id % 3 === 0 ? "0" : "18px"};

    padding-bottom: 0;
    margin-bottom: 8px;
  `};
`;

export default props => (
  <CityCard id={props.id}>
    <Header data={props.data} />
    <Prices>
      {props.data.prices.map((price, i) => (
        <CityPrice key={i}>
          <City>{price.from}</City>
          <Price>от {price.price} ₽</Price>
        </CityPrice>
      ))}
    </Prices>
  </CityCard>
);
