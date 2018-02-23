import React from "react";
import styled from "styled-components";

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

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export default class Checkbox extends React.Component {
  state = {
    checked: this.props.checked,
    text: this.props.text
  };

  onCheckedChange = event => {
    this.setState({
      checked: event.target.checked
    });
  };

  onTextClick = event => {
    this.setState({
      checked: !this.state.checked
    });
  };

  render() {
    return (
      <Container>
        <Check
          type="checkbox"
          checked={this.state.checked}
          onChange={this.onCheckedChange}
        />
        <Text onClick={this.onTextClick}>{this.state.text}</Text>
      </Container>
    );
  }
}
