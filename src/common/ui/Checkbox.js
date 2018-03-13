import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Check = styled.input`
  height: 18px;
  width: 18px;
`;

const Text = styled.span`
  line-height: 24px;
  font-size: 12px;
  margin-left: 6px;
  user-select: none;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
`;

export default class extends React.Component {
  propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
  };

  defaultProps = {
    label: '',
    checked: false,
    className: '',
    onChange: () => {},
  };

  toggle = () => {
    const { onChange, checked } = this.props;
    onChange(!checked);
  };

  render() {
    const { className, label, checked } = this.props;
    return (
      <Checkbox className={className}>
        <Check type="checkbox" checked={checked} onChange={this.toggle} />
        <Text onClick={this.toggle}>{label}</Text>
      </Checkbox>
    );
  }
}
