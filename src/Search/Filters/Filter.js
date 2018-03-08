import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../common/Button';
import clear from './img/clear.svg';
import arrowDown from './img/arrow-down.svg';
import arrowOpen from './img/arrow-up.svg';

const Title = styled.p`
  position: relative;
  display: flex;
  padding: 16px 0;
  line-height: 18px;
  font-weight: 500;
  font-size: 12px;
  color: #5b5b5c;
  text-transform: uppercase;
`;

const Arrow = styled.img`
  margin-right: 8.5px;
`;

const Amount = styled.span``;

const FilterStyled = styled.div`
  position: relative;
  padding: 0 16px;
  border-bottom: 1px solid #dddddd;
`;

const ClearFilter = styled(Button)`
  display: none;
  position: absolute;
  top: 12px;
  right: 16px;

  ${FilterStyled}:first-child & {
    display: block;
  }
`;

const Filter = props => (
  <FilterStyled className={props.className}>
    <ClearFilter>
      <img src={clear} alt="Clear filter" />
    </ClearFilter>
    <Title>
      <Arrow src={props.opened ? arrowOpen : arrowDown} />
      {props.title}
      {props.amount !== 0 && <Amount>{props.amount}</Amount>}
    </Title>
    {props.children}
  </FilterStyled>
);

Filter.defaultProps = {
  className: '',
  opened: false,
  amount: 0,
  children: null,
};

Filter.propTypes = {
  className: PropTypes.string,
  opened: PropTypes.bool,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number,
  children: PropTypes.element,
};

export default Filter;
