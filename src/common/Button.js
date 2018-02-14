import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0;
  border: 0;
  cursor: pointer;
`;

export default props => (
  <Button className={props.className}>{props.children}</Button>
);
