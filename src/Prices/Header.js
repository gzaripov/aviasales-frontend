import React from "react";
import media from "../common/media";
import styled from "styled-components";
import calendar from "./calendar.svg";

const Calendar = styled.div`
  height: 60px;
  width: 60px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  background-image: url(${calendar});
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-width: ${media.md}) {
    margin-top: 48px;
  }
`;

const Text = styled.span`
  font-weight: 500;
  font-size: 18px;
  text-align: center;

  @media screen and (min-width: ${media.md}) {
    font-size: 24px;
  }
`;

const Header = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 16px;
`;

export default () => (
  <Header>
    <Calendar />
    <Text>Лучшие цены на авиабилеты за последний месяц</Text>
  </Header>
);
