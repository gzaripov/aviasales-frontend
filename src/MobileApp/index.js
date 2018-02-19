import React from "react";
import styled from "styled-components";
import media from "../common/media";
import phone from "./phone.png";
import RatingBar from "./RatingBar";
import Platforms from "./Platforms";

const MobileApp = styled.section`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
  position: relative;

  ${media.md`
    margin-top: 40px;
  `};
`;

const MobileImage = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 159px;
  height: 174px;

  ${media.sm`
    width: 172px;
    height: 230px;
  `};

  ${media.md`
    width: 237px;
    height: 312px;
  `};
`;

const Header = styled.h2`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 20px;
  color: white;

  ${media.md`
    line-height: 40px;
    font-size: 32px;
    text-align: left;
  `};
  ${media.lg`
    margin-top: 64px;
  `};
`;

const EnlargedPlatforms = styled(Platforms)`
  padding-top: 56px;
  padding-bottom: 44px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

export default () => (
  <MobileApp id="mobile-app">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-7 col-md-offset-4 center-xs start-md">
          <Header>Скачай мобильное приложение Aviasales.ru</Header>
          <RatingBar />
        </div>
      </div>
      <div className="col-xs-6 col-xs-offset-6 col-md-8 col-md-offset-4 between-md">
        <EnlargedPlatforms />
      </div>
      <div className="col-xs-12">
        <ImageContainer>
          <MobileImage src={phone} />
        </ImageContainer>
      </div>
    </div>
  </MobileApp>
);
