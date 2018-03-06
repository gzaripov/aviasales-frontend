import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CellStyled = styled.div`
  z-index: 2;
`;

const DayOfMonth = styled.div`
  font-size: 16px;
  font-weight: 900;
  padding: 1px 8px;
  line-height: 1;
`;

const Price = styled.div`
  position: absolute;
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  color: #00c455;
`;

const Cell = props => (
  <CellStyled>
    <DayOfMonth>{props.date}</DayOfMonth>
    <Price className='Price'>{props.price}</Price>
  </CellStyled>
);

Cell.defaultProps = {
  price: '',
};

Cell.propTypes = {
  date: PropTypes.string.isRequired,
  price: PropTypes.string,
};

export default Cell;
