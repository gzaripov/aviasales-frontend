import React from "react";
import styled from "styled-components";

const Cell = styled.div`
  z-index: 2;
`;

const DayOfMonth = styled.div`
  font-size: 16px;
  font-weight: 900;
  padding: 1px 8px;
  line-height: 1;
`;

const Price = styled.div`
  position: absolute;
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  color: #00c455;
`;

export default props => (
  <Cell>
    <DayOfMonth>{props.date}</DayOfMonth>
    <Price className="Price">{props.price}</Price>
  </Cell>
);
