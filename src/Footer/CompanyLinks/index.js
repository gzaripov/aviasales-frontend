import React from 'react';
import styled from 'styled-components';
import media from '../../common/media';
import SiteLinks from './SiteLinks';
import SocialLinks from './SocialLinks';
import AppBanners from './AppBanners';

const SearchHotels = styled.p`
  font-size: 12px;
  margin-top: 24px;
  margin-bottom: 16px;

  ${media.sm`
    text-align: start;
  `};
`;

const Copyright = styled.p`
  font-size: 12px;
  color: #5b5b5c;

  ${media.sm`
    text-align: start;
  `};

  ${media.lg`
    margin-top: 24px;
    text-align: end;
  `};
`;

const CompanyLinks = styled.div`
  margin-top: 36px;
`;

export default () => (
  <CompanyLinks>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-lg-7">
          <SiteLinks />
          <SocialLinks />
          <SearchHotels>Поиск и бронирование отелей</SearchHotels>
        </div>
        <div className="col-xs-12 col-lg-5 end-lg">
          <AppBanners />
          <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
        </div>
      </div>
    </div>
  </CompanyLinks>
);
