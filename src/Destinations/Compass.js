import React from "react";
import styled from "styled-components";
import compass from "./compass.svg";

const Compass = styled.div`
  height: 64px;
  width: 64px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  background-image: url(${compass});
  background-position: center;
  background-repeat: no-repeat;
`;

export default () => (
  <div>
    <Compass />
  </div>
);
