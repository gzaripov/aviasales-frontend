import React from "react";
import styled from "styled-components";
import media from "../../common/media";
import CityInput from "./CityInput";
import CityIndex from "./CityIndex";
import Button from "../../common/Button";
import arrow from "./icons/arrow.svg";

const SwapButton = styled(Button)``;

const DepartureCity = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  margin: 1px;
  width: 100%;
  padding: 17px 16px;

  ${media.sm`
    width: calc(50% - 2px);
  `};

  ${media.lg`
    width: calc(20% - 2px);
  `};
`;

export default () => (
  <DepartureCity>
    <CityInput value="Москва" placeholder="Город вылета" />
    <CityIndex>mow</CityIndex>
    <SwapButton>
      <img src={arrow} alt="Swap cities button" />
    </SwapButton>
  </DepartureCity>
);
