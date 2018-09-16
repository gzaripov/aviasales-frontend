import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Logo = styled.img`
  padding: 4px;
  margin-left: 10px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  width: 36px;
  height: 36px;

  :only-child {
    padding: 0;
    border: none;
    border-radius: 0;
    width: 99px;
    height: 36px;
  }
`;

const LogosStyled = styled.div`
  display: flex;
  margin-left: auto;
`;

const Logos = props => (
  <LogosStyled className={props.className}>
    {props.logos.map(logo => <Logo src={logo.img} key={logo.id} alt="Aircompany Logo" />)}
  </LogosStyled>
);

Logos.defaultProps = {
  className: '',
  logos: [],
};

Logos.propTypes = {
  className: PropTypes.string,
  logos: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Logos;
