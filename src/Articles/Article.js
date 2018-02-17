import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0 0 0 10px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
`;

const Article = styled.div`
  margin-bottom: 16px;
  text-align: left;
`;

const Text = styled.p`
  font-size: 14px;
  padding-top: 12px;
`;

const Link = styled.a`
  font-size: 14px;
  color: #00ace2;
  text-decoration: none;
  cursor: pointer;
  margin-left: 8px;
`;

export default props => (
  <Article>
    <Header>
      <div>
        <img src={props.article.icon} alt="Article icon" />
      </div>
      <Title>{props.article.title}</Title>
    </Header>
    <Text>
      {props.article.text}
      <Link>Подробнее</Link>
    </Text>
  </Article>
);
