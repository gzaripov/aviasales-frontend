import React from "react";
import media from "../common/media";
import styled from "styled-components";
import calendar from "./calendar.svg";

const Calendar = styled.img`
  margin: 40px auto 20px;

  ${media.md`
    margin-top: 48px;
  `};
`;

const Text = styled.span`
  font-weight: 500;
  font-size: 18px;
  text-align: center;

  ${media.md`
    font-size: 24px;
  `};
`;

const Heading = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.sm`
    margin-bottom: 36px;
  `};
`;

export default () => (
  <Heading>
    <Calendar src={calendar} alt="Calendar Icon" />
    <Text>Лучшие цены на авиабилеты за последний месяц</Text>
  </Heading>
);
