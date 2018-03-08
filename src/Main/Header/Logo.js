import React from 'react';
import styled from 'styled-components';
import media from '../../common/media';
import icon from './icons/logo.svg';

const Text = styled.span`
  display: none;
  font-size: 20px;
  color: #ffffff;
  margin-left: 12px;
  ${media.sm`
    display: inline;
  `};
`;

const Logo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

export default () => (
  <Logo>
    <img src={icon} alt="Aviasales icon" />
    <Text>aviasales</Text>
  </Logo>
);
