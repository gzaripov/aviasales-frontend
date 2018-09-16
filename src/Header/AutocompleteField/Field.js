import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  margin-right: 12px;
  text-overflow: ellipsis;
`;

const FieldStyled = styled.div`
  display: flex;
  border-radius: inherit;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 18px 16px;
`;

const Field = ({
  value, placeholder, children, className, onChange, onClick,
}) => (
  <FieldStyled className={className} onClick={onClick}>
    <Input placeholder={placeholder} value={value} onChange={onChange} />
    {children}
  </FieldStyled>
);

Field.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

Field.defaultProps = {
  value: '',
  placeholder: '',
  children: null,
  className: '',
  onChange: () => {},
  onClick: () => {},
};

export default Field;
