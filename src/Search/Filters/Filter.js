import React from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import clear from "./img/clear.svg";
import arrowDown from "./img/arrow-down.svg";
import arrowOpen from "./img/arrow-up.svg";

const Title = styled.p`
  position: relative;
  display: flex;
  padding: 16px 0;
  line-height: 18px;
  font-weight: 500;
  font-size: 12px;
  color: #5b5b5c;
  text-transform: uppercase;
`;

const Arrow = styled.img`
  margin-right: 8.5px;
`;

const Amount = styled.span``;

const Filter = styled.div`
  position: relative;
  padding: 0 16px;
  border-bottom: 1px solid #dddddd;
`;

const ClearFilter = styled(Button)`
  display: none;
  position: absolute;
  top: 12px;
  right: 16px;

  ${Filter}:first-child & {
    display: block;
  }
`;

export default props => (
  <Filter className={props.className}>
    <ClearFilter>
      <img src={clear} alt="Clear filter" />
    </ClearFilter>
    <Title>
      <Arrow src={props.opened ? arrowOpen : arrowDown} />
      {props.title}
      {props.amount && <Amount>{props.amount}</Amount>}
    </Title>
    {props.children}
  </Filter>
);
