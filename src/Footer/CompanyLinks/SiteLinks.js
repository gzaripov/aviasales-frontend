import React from 'react';
import styled from 'styled-components';

const SiteLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 26px;
`;

const Link = styled.a`
  font-size: 12px;
  color: #5b5b5c;
  margin-right: 8px;
  margin-bottom: 8px;
  text-decoration: none;
`;

export default () => (
  <SiteLinks>
    <Link href="/">О компании</Link>
    <Link href="/">Партнёрская программа</Link>
    <Link href="/">Реклама</Link>
    <Link href="/">Вакансии</Link>
    <Link href="/">Помощь</Link>
    <Link href="/">Правила</Link>
    <Link href="/">White Label авиабилеты</Link>
  </SiteLinks>
);
