import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: #fff;
  font-weight: 500;
  font-size: 20px;

  @media (--sm-viewport) {
    font-size: 32px;
  }
`;

const Subtitle = styled.h2`
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  margin-top: 8px;
`;

export default ({ className }) => (
  <div className={className}>
    <Title>Поиск дешевых авиабилетов</Title>
    <Subtitle className="hidden-xs">
      Лучший способ купить авиабилеты дешево
    </Subtitle>
  </div>
);
