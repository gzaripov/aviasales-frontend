import React from "react";
import styled from "styled-components";
import media from "../../common/media";

const Title = styled.h1`
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 16px;

  ${media.sm`
    margin-bottom: 0;
    font-size: 32px;
  `};

  ${media.lg`
    font-size: 40px;
  `};
`;

const Subtitle = styled.h2`
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  margin-top: 8px;
  margin-bottom: 40px;
  display: none;

  ${media.sm`
    display: block;
  `};
`;

const Heading = styled.div`
  align-self: center;
  margin-left: auto;
  margin-right: auto;
`;

export default () => (
  <Heading>
    <Title>Поиск дешевых авиабилетов</Title>
    <Subtitle>Лучший способ купить авиабилеты дешево</Subtitle>
  </Heading>
);
