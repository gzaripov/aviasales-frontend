import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 0;
  border: 0;
  cursor: pointer;
  background: none;
`;

const Button = props => (
  <ButtonStyled type="button" onClick={props.onClick} className={props.className}>
    {props.children}
  </ButtonStyled>
);

Button.defaultProps = {
  onClick: () => {},
  className: '',
  children: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.element,
};

export default Button;
