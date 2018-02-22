import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0;
  border: 0;
  cursor: pointer;
  background: none;
`;

export default props => (
  <Button onClick={props.onClick} className={props.className}>
    {props.children}
  </Button>
);
