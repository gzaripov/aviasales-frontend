import React from "react";
import styled from "styled-components";
import media from "../../common/media";
import { Link } from "react-router-dom";
import aero from "./icons/aero.svg";

const SearchButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  border-radius: 4px;
  background-color: #ff9241;
  text-decoration: none;
  height: 56px;

  ${media.sm`
    padding: 0 35px 0 50px;
    margin-top: 24px;
    align-self: center;
  `};

  ${media.md`
    height: 64px;
  `};

  ${media.md`
    margin-top: 48px;
  `};
`;

const Text = styled.span`
  font-weight: 900;
  font-size: 24px;
  color: #ffffff;
  margin-right: 24px;

  ${media.md`
    font-size: 28px;
  `};
`;

export default () => (
  <SearchButton to="/search">
    <Text>Найти билеты</Text>
    <img src={aero} alt="Airplane icon" />
  </SearchButton>
);
