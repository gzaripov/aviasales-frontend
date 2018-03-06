import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../../common/media';
import androidIcon from './android.svg';
import appleIcon from './apple.svg';
import windows from './windows.svg';

const PlatformsStyled = styled.div`
  display: flex;
  flex-direction: column;

  ${media.md`
    align-items: center;
    flex-direction: row;
  `};
`;

const Platform = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  :last-child {
    padding-bottom: 0;
  }

  ${media.md`
    padding: 0 20px;
    border-right: 1px solid rgba(255, 255, 255, 0.5);

    :first-child {
      padding-left: 0;
    }

    :last-child {
      border-right: none;
      paddin-right: 0;
    }
  `};
`;

const PlatformIcon = styled.img`
  margin-left: 8px;
  margin-right: 8px;

  ${media.md`
    margin-left: 0;
  `};
`;

const PlatformText = styled.a`
  display: block;
  font-size: 14px;
  color: #ffffff;

  ${media.md`
    line-height: 28px;
  `};
`;

const Platforms = props => (
  <PlatformsStyled className={props.className}>
    <Platform>
      <PlatformIcon src={appleIcon} alt='Apple Icon' />
      <PlatformText>iPhone или iPad</PlatformText>
    </Platform>
    <Platform>
      <PlatformIcon src={androidIcon} alt='Android Icon' />
      <PlatformText>Android</PlatformText>
    </Platform>
    <Platform>
      <PlatformIcon src={windows} alt='Wf Icon' />
      <PlatformText>Windows Phone</PlatformText>
    </Platform>
  </PlatformsStyled>
);

Platforms.defaultProps = {
  className: '',
};

Platforms.propTypes = {
  className: PropTypes.string,
};

export default Platforms;
