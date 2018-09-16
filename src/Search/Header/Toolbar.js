import React from 'react';
import styled from 'styled-components';
import media from '../../common/media';
import arrow from './arrow.svg';

const BackArrow = styled.img`
  cursor: pointer;
`;

const Toolbar = styled.div`
  display: flex;
  padding: 10px 0;

  ${media.sm`
      display: none;
  `};
`;

const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  line-height: 20px;
  font-size: 16px;
  color: #ffffff;
  text-align: left;
`;

const Subtitle = styled.h3`
  margin: 0;
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  color: #ffffff;
  text-align: left;
`;

const TitleAndSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 26px;
`;

export default () => (
  <Toolbar>
    <BackArrow src={arrow} alt="Back arrow" />
    <TitleAndSubtitle>
      <Title>Москва — Барселона</Title>
      <Subtitle>24 фев — 3 март, 1 пассажир</Subtitle>
    </TitleAndSubtitle>
  </Toolbar>
);
