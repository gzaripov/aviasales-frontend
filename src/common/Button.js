import React from "react";
import styled from "styled-components";

const Button = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export default ({ className, children }) => styled(Button)`
  border: none;
  &focus {
    outline: 0;
  }
`;
