import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Flex = styled.div`
  display: flex;
`;

export default ({ className, children }) => (
  <Flex className={className}>{children}</Flex>
);
