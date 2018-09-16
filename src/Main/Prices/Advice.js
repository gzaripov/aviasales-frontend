import React from 'react';
import styled from 'styled-components';
import media from '../../common/media';

const Advice = styled.div`
  margin-top: 32px;
  margin-bottom: 40px;

  ${media.lg`
    margin-top: 72px;
  `};
`;

const AdviceText = styled.p`
  margin: 0;
  padding-left: 10px;
  padding-right: 10px;
  line-height: 24px;
`;

const GrayText = styled.p`
  margin: 0;
  padding-top: 24px;
  font-size: 14px;
  color: #a0b0b9;
`;

export default () => (
  <Advice>
    <AdviceText>
      <span>
        Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран мира. Поиск и
        сравнение цен на авиабилеты среди 100 агентств и 728 авиакомпаний.
      </span>
    </AdviceText>
    <GrayText>
      <span>Цены, найденные пользователями за последние 48 часов, не являются офертой.</span>
    </GrayText>
  </Advice>
);
