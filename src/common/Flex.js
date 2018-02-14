import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : "")};
  align-items: ${props => (props.alignItems ? props.alignItems : "")};
`;

export default props => (
  <Flex
    flexDirection={props.flexDirection}
    alignItems={props.alignItems}
    className={props.className}
  >
    {props.children}
  </Flex>
);
