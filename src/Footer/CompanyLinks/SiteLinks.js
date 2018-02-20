import React from "react";
import styled from "styled-components";

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
`;

export default () => (
  <SiteLinks>
    <Link>О компании</Link>
    <Link>Партнёрская программа</Link>
    <Link>Реклама</Link>
    <Link>Вакансии</Link>
    <Link>Помощь</Link>
    <Link>Правила</Link>
    <Link>White Label авиабилеты</Link>
  </SiteLinks>
);
