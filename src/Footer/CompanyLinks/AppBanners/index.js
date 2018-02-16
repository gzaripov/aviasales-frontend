import React from "react";
import media from "../../../common/media";
import styled from "styled-components";
import appStore from "./banners/app-store.svg";
import googlePlay from "./banners/google-play.svg";
import windowsPhone from "./banners/windows-phone.svg";

const AppBanners = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  @media screen and (min-width: ${media.sm}) {
    flex-direction: row;
  }
`;

const AppBanner = styled.img`
  margin-right: 10px;
  margin-bottom: 8px;
`;

export default () => (
  <AppBanners>
    <AppBanner src={appStore} alt="App Store logo" />
    <AppBanner src={googlePlay} alt="Google Play logo" />
    <AppBanner src={windowsPhone} alt="Windows Phone logo" />
  </AppBanners>
);
