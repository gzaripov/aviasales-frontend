import React from "react";
import styled from "styled-components";
import media from "../../common/media";
import androidIcon from "./android.svg";
import appleIcon from "./apple.svg";
import windows from "./windows.svg";

const Platforms = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${media.md}) {
    align-items: center;
    flex-direction: row;
  }
`;

const Platform = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  :last-child {
    padding-bottom: 0;
  }

  @media screen and (min-width: ${media.md}) {
    padding: 0 20px;
    border-right: 1px solid rgba(255, 255, 255, 0.5);

    :first-child {
      padding-left: 0;
    }

    :last-child {
      border-right: none;
      paddin-right: 0;
    }
  }
`;

const PlatformIcon = styled.img`
  margin-left: 8px;
  margin-right: 8px;

  @media screen and (min-width: ${media.md}) {
    margin-left: 0;
  }
`;

const PlatformText = styled.a`
  display: block;
  font-size: 14px;
  color: #ffffff;

  @media screen and (min-width: ${media.md}) {
    line-height: 28px;
  }
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
