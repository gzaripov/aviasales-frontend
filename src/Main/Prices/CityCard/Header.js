import React from "react";
import styled from "styled-components";

const Flag = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 12px;
  align-self: center;
  box-shadow: 0px 0px 8px rgba(38, 38, 38, 0.1);
  border-radius: 100px;
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

const Heading = styled.div`
  display: flex;
`;

export default props => (
  <Heading>
    <Flag src={props.data.flag} alt="Flag icon" />
    <CityAndCountry>
      <City>{props.data.city}</City>
      <Country>{props.data.country}</Country>
    </CityAndCountry>
  </Heading>
);
