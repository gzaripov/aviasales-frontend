import React from "react";
import media from "../../common/media";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0 0 0 10px;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
`;

const Article = styled.div`
  margin-bottom: 16px;
  text-align: left;
`;

const Text = styled.p`
  font-size: 14px;
  padding-top: 22px;

  ${media.md`
    padding-top: 16px;
  `};
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
    <Heading>
      <div>
        <img src={props.data.icon} alt="Article icon" />
      </div>
      <Title>{props.data.title}</Title>
    </Heading>
    <Text>
      {props.data.text}
      <Link>Подробнее</Link>
    </Text>
  </Article>
);
