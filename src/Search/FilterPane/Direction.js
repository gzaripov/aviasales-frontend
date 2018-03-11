import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import airplane from './img/airplane.svg';

const Divider = styled.img`
  margin: 0 8px;
`;

const DirectionStyled = styled.h3`
  display: flex;
  font-weight: 500;
  font-size: 14px;
  color: #323333;
  margin: 0;
  user-select: none;
`;

const Direction = ({ from, to, className }) => (
  <DirectionStyled className={className}>
    {from}
    <Divider src={airplane} alt="Airplane icon" />
    {to}
  </DirectionStyled>
);

Direction.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Direction.defaultProps = {
  className: '',
};

export default Direction;
