import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../../common/ui/Button';
import clear from './img/clear.svg';

const ResetFilters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;
  cursor: pointer;

  &:hover {
    background: #f1fcff;
  }
`;

const Text = styled.p`
  color: #00bde4;
  font-size: 12px;
  text-transform: uppercase;
`;

const ResetButton = styled(Button)`
  display: flex;
`;

const Reset = ({ onReset }) => (
  <ResetFilters onClick={onReset}>
    <Text>Сбросить все фильтры</Text>
    <ResetButton>
      <img src={clear} alt="Сбросить фильтр" />
    </ResetButton>
  </ResetFilters>
);

Reset.defaultProps = {
  onReset: () => {},
};

Reset.propTypes = {
  onReset: PropTypes.func,
};

export default Reset;
