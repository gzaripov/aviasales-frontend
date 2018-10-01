import React from 'react';
import styled from 'styled-components';
import media from '../../common/media';
import appStore from './banners/app-store.svg';
import googlePlay from './banners/google-play.svg';
import windowsPhone from './banners/windows-phone.svg';

const AppBanners = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  ${media.sm`
    flex-direction: row;
  `};

  ${media.xl`
    justify-content: flex-end;
  `};
`;

const Banner = styled.img`
  margin-right: 10px;
  margin-bottom: 8px;

  ${media.xl`
    margin-left: 10px;
    margin-right: 0px;
  `};
`;

export default () => (
  <AppBanners>
    <Banner src={appStore} alt="App Store logo" />
    <Banner src={googlePlay} alt="Google Play logo" />
    <Banner src={windowsPhone} alt="Windows Phone logo" />
  </AppBanners>
);
