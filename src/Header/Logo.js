import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const Logo = styled.div`
  position: absolute;
  margin-top: 12px;
  height: 30px;
  width: 30px;
  background-image: url(${logo});
`;

export default () => (
  <div>
    <Logo />
  </div>
);
