import React from 'react';
import styled from 'styled-components';
import media from '../common/media';
import FlightLinks from './FlightLinks';
import SocialLinks from './CompanyLinks';

const Footer = styled.footer`
  padding-bottom: 24px;

  ${media.sm`
    padding-top: 8px;
    padding-bottom: 40px;
  `};
`;

export default () => (
  <Footer>
    <FlightLinks />
    <SocialLinks />
  </Footer>
);
