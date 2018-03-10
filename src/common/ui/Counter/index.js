import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import minus from './img/minus.svg';
import plus from './img/plus.svg';

const CounterStyled = styled.div`
  display: flex;
  align-items: center;
  width: 72px;
  height: 32px;
  user-select: none;
`;

const Increment = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #dbdbdb;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border: 1px solid #dbdbdb;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: border-color 0.3s, color 0.3s;
  &:hover {
    color: #00b8e9;
    border-color: #00b8e9;
  }
  ${props =>
    props.disabled &&
    css`
      cursor: default;
      pointer-events: none;
      color: #e1e1e1;
      border-color: #e1e1e1;
    `};
`;

const Decrement = Increment.extend`
  border: 4px 0 0 4px;
`;

const IncrementIcon = styled.img`
  width: 10px;
  height: 10px;
`;
const DecrementIcon = styled.img`
  width: 10px;
  height: 2px;
`;

const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 100%;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #4a4a4a;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
`;

export default class Counter extends Component {
  handleClick = delta => () => {
    const {
      min, max, value, onChange,
    } = this.props;
    if (min <= value && value >= max) {
      onChange(delta);
    }
  };

  render() {
    const {
      value, disabled, min, max,
    } = this.props;
    return (
      <CounterStyled>
        <Decrement disabled={disabled || value <= min} onClick={this.handleClick(-1)} type="button">
          <DecrementIcon src={minus} alt="minus icon" />
        </Decrement>
        <Count>{value}</Count>
        <Increment disabled={disabled || value >= max} onClick={this.handleClick(1)} type="button">
          <IncrementIcon src={plus} alt="plus icon" />
        </Increment>
      </CounterStyled>
    );
  }
}
