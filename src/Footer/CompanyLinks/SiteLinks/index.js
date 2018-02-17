import React from "react";
import styled from "styled-components";

const SiteLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 26px;
`;

const SiteLink = styled.a`
  font-size: 12px;
  color: #5b5b5c;
  margin-right: 8px;
  margin-bottom: 8px;
`;

export default () => (
  <SiteLinks>
    <SiteLink>О компании</SiteLink>
    <SiteLink>Партнёрская программа</SiteLink>
    <SiteLink>Реклама</SiteLink>
    <SiteLink>Вакансии</SiteLink>
    <SiteLink>Помощь</SiteLink>
    <SiteLink>Правила</SiteLink>
    <SiteLink>White Label авиабилеты</SiteLink>
  </SiteLinks>
);
