import React from "react";
import styled from "styled-components";
import SiteLinks from "./SiteLinks";
import SocialLinks from "./SocialLinks";
import AppBanners from "./AppBanners";

const SearchHotels = styled.p`
  margin-top: 24px;
  margin-bottom: 16px;
`;

const Copyright = styled.p`
  font-size: 12px;
  color: #5b5b5c;
`;

export default () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <SiteLinks />
        <SocialLinks />
        <SearchHotels>Поиск и бронирование отелей</SearchHotels>
        <AppBanners />
        <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
      </div>
    </div>
  </div>
);
