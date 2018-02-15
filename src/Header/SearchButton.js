import React from "react";
import styled from "styled-components";
import media from "../common/media";
import Button from "../common/Button";
import aero from "./icons/aero.svg";

const SearchButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  border-radius: 4px;
  background-color: #ff9241;
  height: 56px;

  @media screen and (min-width: ${media.sm}) {
    padding: 0 35px 0 50px;
    margin-top: 24px;
    align-self: center;
  }
  @media screen and (min-width: ${media.md}) {
    height: 64px;
  }
  @media screen and (min-width: ${media.md}) {
    margin-top: 48px;
  }
`;

const Text = styled.span`
  font-weight: 900;
  font-size: 24px;
  color: #ffffff;
  margin-right: 24px;
  @media screen and (min-width: ${media.md}) {
    font-size: 28px;
  }
`;

export default () => (
  <SearchButton>
    <Text>Найти билеты</Text>
    <img src={aero} alt="Airplane icon" />
  </SearchButton>
);
