import React from "react";
import styled from "styled-components";
import phone from "./phone.png";
import RatingBar from "./RatingBar";
import Platforms from "./Platforms";

const MobileApp = styled.div`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
  position: relative;
`;

const MobileImageContainer = styled.div`
  position: relative;
`;

const MobileImage = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 162px;
  height: 213;
`;

const Header = styled.h2`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 20px;
  color: white;
`;

const EnlargedPlatforms = styled(Platforms)`
  padding-top: 56px;
  padding-bottom: 56px;
`;

export default () => (
  <MobileApp>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <MobileImage src={phone} />
        </div>
        <div className="col-xs-12 center-xs">
          <Header>Скачай мобильное приложение Aviasales.ru</Header>
          <RatingBar />
        </div>
      </div>
      <div className="col-xs-6 col-xs-offset-6">
        <EnlargedPlatforms />
      </div>
    </div>
  </MobileApp>
);
