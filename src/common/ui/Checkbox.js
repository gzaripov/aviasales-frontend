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
    className: PropTypes.string,
  };

  state = {
    checked: true,
  };

  onCheckedChange = (event) => {
    this.setState({
      checked: event.target.checked,
    });
    this.props.onChange(event.target.checked);
  };

  onTextClick = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    const { className, label } = this.props;
    return (
      <Checkbox className={className}>
        <Check type="checkbox" checked={this.state.checked} onChange={this.onCheckedChange} />
        <Text onClick={this.onTextClick}>{label}</Text>
      </Checkbox>
    );
  }
}
