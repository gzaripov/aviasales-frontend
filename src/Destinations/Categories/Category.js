import React from "react";
import media from "../../common/media";
import styled from "styled-components";

const Icon = styled.img`
  box-shadow: 0 4px 4px rgba(74, 74, 74, 0.12);
  border-radius: 50px;
  padding: 13px;
`;

const Text = styled.span`
  max-width: 70px;
  margin-top: 12px;
  line-height: 20px;
  color: ${props => (props.active ? "#5C5C5C" : "#00ace2")};
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

const Underline = styled.div`
  display: ${props => (props.active ? "block" : "none")};
  height: 1px;
  width: 80%;
  margin-top: 2px;
  background: #00ace2;
`;

export default props => (
  <Category>
    <Icon src={props.imageUrl} alt="Category icon" />
    <Text active={props.active}>{props.text}</Text>
    <Underline active={props.active} />
  </Category>
);
