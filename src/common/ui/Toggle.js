import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Toggle = styled.div`
  position: absolute;
  left: ${p => (p.checked ? '45%' : '5%')};
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  padding: 2px;
  background: #ffffff;
  border-radius: 10px;
  transition: all 0.2s;
`;

const ToggleBox = styled.div`
  position: relative;
  width: 40px;
  height: 24px;
  justify-content: ${p => (p.checked ? 'flex-end' : 'flex-start')};
  align-items: center;
  transition: all 0.2s;
  background: ${p => (p.checked ? '#9ccc66' : '#bccdd6')};
  border-radius: 100px;
  box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const Label = styled.label`
  padding-left: 16px;
  line-height: 18px;
  font-size: 12px;
  user-select: none;
  cursor: pointer;
`;

const ToggleStyled = styled.div`
  display: flex;
  align-items: center;
`;

const Container = ({ checked, onToggleClicked, label }) => (
  <ToggleStyled>
    <ToggleBox checked={checked} onClick={onToggleClicked}>
      <Toggle checked={checked} />
    </ToggleBox>
    <Label onClick={onToggleClicked}>{label}</Label>
  </ToggleStyled>
);

Container.defaultProps = {
  checked: false,
  onToggleClicked: () => {},
  label: '',
};

Container.propTypes = {
  checked: PropTypes.bool,
  onToggleClicked: PropTypes.func,
  label: PropTypes.string,
};

export default Container;
