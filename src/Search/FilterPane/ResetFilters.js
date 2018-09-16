import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../../common/ui/Button';
import clear from './img/clear.svg';

const Text = styled.p`
  color: #00bde4;
  font-size: 12px;
  text-transform: uppercase;
`;

const ResetFilters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;
  user-select: none;
  cursor: pointer;

  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 0.7;
      ${Text} {
        color: #a0b0b5;
      }
    `};

  &:hover {
    background: #f1fcff;
  }
`;

const ResetButton = styled(Button)`
  display: flex;
`;

const Reset = ({ onReset, disabled }) => (
  <ResetFilters onClick={onReset} disabled={disabled}>
    <Text>Сбросить все фильтры</Text>
    <ResetButton>
      <img src={clear} alt="Сбросить фильтр" />
    </ResetButton>
  </ResetFilters>
);

Reset.defaultProps = {
  onReset: () => {},
  disabled: false,
};

Reset.propTypes = {
  onReset: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Reset;
