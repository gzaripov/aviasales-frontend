import React from "react";
import styled from "styled-components";
import arrowDown from "./icons/arrow_down.svg";

const Text = styled.span``;
const SecondaryText = styled.span`
  color: #a0b0b9;
`;

const PassengerAndClass = styled.div`
  display: flex;
`;

export default () => (
  <PassengerAndClass>
    <Text>1 пассажир,&nbsp;</Text>
    <SecondaryText>эконом</SecondaryText>
    <img src={arrowDown} alt="Arrow" />
  </PassengerAndClass>
);
