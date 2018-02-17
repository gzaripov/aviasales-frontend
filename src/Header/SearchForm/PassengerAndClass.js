import React from "react";
import media from "../../common/media";
import styled from "styled-components";
import arrowDown from "./icons/arrow_down.svg";

const Text = styled.span``;

const SecondaryText = styled.span`
  color: #a0b0b9;
`;

const PassengerAndClass = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  margin: 1px;
  width: 100%;
  padding: 19px 16px;

  ${media.sm`
    width: calc(50% - 2px);
  `};

  ${media.lg`
    width: calc(25% - 2px);
  `};
`;

const ArrowDown = styled.img`
  margin-left: auto;
`;

export default () => (
  <PassengerAndClass>
    <Text>1 пассажир,&nbsp;</Text>
    <SecondaryText>эконом</SecondaryText>
    <ArrowDown src={arrowDown} alt="Arrow" />
  </PassengerAndClass>
);
