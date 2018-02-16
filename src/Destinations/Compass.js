import React from "react";
import media from "../common/media";
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

  @media screen and (min-width: ${media.md}) {
    margin-top: 56px;
    margin-bottom: 20px;
  }
`;

export default () => (
  <div>
    <Compass />
  </div>
);
