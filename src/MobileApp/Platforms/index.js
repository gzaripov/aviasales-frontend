import React from "react";
import styled from "styled-components";
import androidIcon from "./android.svg";
import appleIcon from "./apple.svg";
import wfIcon from "./wf.svg";

const Platforms = styled.div`
  display: flex;
  flex-direction: column;
`;

const Platform = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`;

const PlatformIcon = styled.img`
  margin-left: 8px;
  margin-right: 8px;
`;

const PlatformText = styled.p`
  font-size: 14px;

  color: #ffffff;
`;

export default props => (
  <Platforms className={props.className}>
    <Platform>
      <PlatformIcon src={appleIcon} alt="Apple Icon" />
      <PlatformText>iPhone или iPad</PlatformText>
    </Platform>
    <Platform>
      <PlatformIcon src={androidIcon} alt="Android Icon" />
      <PlatformText>Android</PlatformText>
    </Platform>
    <Platform>
      <PlatformIcon src={wfIcon} alt="Wf Icon" />
      <PlatformText>Windows Phone</PlatformText>
    </Platform>
  </Platforms>
);
