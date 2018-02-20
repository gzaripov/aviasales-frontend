import React from "react";
import styled from "styled-components";
import media from "../../../../common/media";
import { DepartureDate, ArrivalDate } from "./FlightDate";

const Dates = styled.div`
  display: flex;
  width: 100%;
  margin: 1px;

  ${media.sm`
    width: calc(50% - 2px);
  `};

  ${media.lg`
    width: calc(35% - 2px);
  `};
`;

const DividerDiv = styled.div`
  width: 2px;
`;

export default () => (
  <Dates>
    <DepartureDate />
    <DividerDiv />
    <ArrivalDate />
  </Dates>
);
