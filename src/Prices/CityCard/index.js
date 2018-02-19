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

const CityPrice = styled(props => (
  <div className={props.className}>
    <From>{props.data.from}</From>
    <Price>от {props.data.price} ₽</Price>
  </div>
))`
  display: flex;
  margin-bottom: 16px;
`;

const Prices = styled(props => (
  <div className={props.className}>
    {props.prices.map((price, i) => <CityPrice data={price} key={i} />)}
  </div>
))`
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
    <Prices prices={props.data.prices} />
  </CityCard>
);
