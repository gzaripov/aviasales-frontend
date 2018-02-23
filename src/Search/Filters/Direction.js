import React from "react";
import styled from "styled-components";
import airplane from "./img/airplane.svg";

const Divider = styled.img`
  margin: 0 8px;
`;

const Direction = styled.h3`
  display: flex;
  font-weight: 500;
  font-size: 14px;
  color: #323333;
  margin: 0;
`;

export default props => (
  <Direction>
    {props.from}
    <Divider src={airplane} alt="Airplane icon" />
    {props.to}
  </Direction>
);
