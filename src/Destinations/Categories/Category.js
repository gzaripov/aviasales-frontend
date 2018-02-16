import React from "react";
import media from "../../common/media";
import styled from "styled-components";

const Icon = styled.div`
  display: inline-block;
  width: 48px;
  height: 48px;
  background-image: ${props => `url(${props.url})`};
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 4px 4px rgba(74, 74, 74, 0.12);
  border-radius: 50px;
`;

const Text = styled.span`
  max-width: 70px;
  margin-top: 12px;
  color: #00ace2;
  text-transform: uppercase;
  font-size: 12px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 19px 16px;
  width: 33%;

  @media screen and (min-width: ${media.md}) {
    padding: 0;
    width: auto;
  }
`;

export default props => (
  <Category>
    <Icon url={props.imageUrl} />
    <Text>{props.text}</Text>
  </Category>
);
