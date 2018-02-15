import React from "react";
import styled from "styled-components";
import androidIcon from "./android.svg";
import appleIcon from "./apple.svg";
import windows from "./windows.svg";

const Platforms = styled.div`
  display: flex;
  flex-direction: column;
`;

const Platform = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  :last-child {
    padding-bottom: 0;
  }
`;

const PlatformIcon = styled.img`
  margin-left: 8px;
  margin-right: 8px;
`;

const PlatformText = styled.a`
  display: block;
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
      <PlatformIcon src={windows} alt="Wf Icon" />
      <PlatformText>Windows Phone</PlatformText>
    </Platform>
  </Platforms>
);
