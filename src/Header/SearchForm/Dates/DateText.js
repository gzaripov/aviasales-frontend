import React from "react";
import styled from "styled-components";

const DateText = styled.p`
  margin: 0;
  color: ${props => (props.disabled ? "#A0B0B9;" : "#4A4A4A")};
`;

export default DateText;
