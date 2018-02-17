import React from "react";
import styled from "styled-components";

const Flag = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 12px;
  align-self: center;
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

const CityAndCountry = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
`;

export default props => (
  <Header>
    <Flag src={props.cardData.flag} alt="Flag icon" />
    <CityAndCountry>
      <City>{props.cardData.city}</City>
      <Country>{props.cardData.country}</Country>
    </CityAndCountry>
  </Header>
);
