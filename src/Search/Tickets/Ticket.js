import React from "react";
import styled from "styled-components";
import media from "../../common/media";
import { MobileContent } from "./MobileContent";
import Content from "./Content";

const Ticket = styled.div`
  margin-bottom: 8px;
  margin-left: -8px;
  margin-right: -8px;
  background-color: #fff;

  ${media.sm`
    border-radius: 4px;
    margin-left: 0;
    margin-right: 0;
  `};
`;

export default props => (
  <Ticket>
    <MobileContent data={props.data} />
    <Content data={props.data} />
  </Ticket>
);
