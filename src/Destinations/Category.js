import React from "react";
import media from "../common/media";
import Button from "../common/Button";
import styled from "styled-components";

const Category = styled.div`
  display: flex;
  width: 33%;
  justify-content: center;
  padding: 19px 16px;

  ${media.md`
    width: auto;  
    padding: 0;
  `};
`;

const CategoryButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => (props.selected ? "#5C5C5C" : "#00ace2")};
  transition: color 0.3s ease;

  :hover {
    color: ${props => (props.selected ? "#5C5C5C" : "#ff8b00;")};
  }
`;

const Text = styled.span`
  max-width: 70px;
  margin-top: 12px;
  line-height: 20px;
  text-transform: uppercase;
  font-size: 12px;
`;

const Icon = styled.img`
  box-shadow: 0 1px 4px rgba(74, 74, 74, 0.12);
  border-radius: 50px;
  padding: 13px;
  transition: all 0.5s ease;

  ${CategoryButton}:hover & {
    transform: ${props => (CategoryButton.selected ? "" : "translateY(-5px);")};
    box-shadow: 0 4px 4px rgba(74, 74, 74, 0.12);
  }
`;

const Underline = styled.hr`
  display: ${props => (props.selected ? "block" : "none")};
  padding: 0 30px;
  margin-top: 2px;
  border-top: 1px solid #00ace2;
`;

export default props => (
  <Category className={props.className}>
    <CategoryButton selected={props.selected}>
      <Icon src={props.imageUrl} alt="Category icon" />
      <Text>{props.text}</Text>
      <Underline selected={props.selected} />
    </CategoryButton>
  </Category>
);
