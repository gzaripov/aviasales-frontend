import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import aero from "./icons/aero.svg";

const Root = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 16px;
  border-radius: 4px;
  background-color: #ff9241;
  height: 56px;
`;

const Text = styled.span`
  font-weight: 900;
  font-size: 24px;
  color: #ffffff;
  margin-right: 24px;
`;

export default () => (
  <Root>
    <Text>Найти билеты</Text>
    <img src={aero} alt="Airplane icon" />
  </Root>
);
