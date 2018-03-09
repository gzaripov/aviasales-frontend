import React from "react";
import styled from "styled-components";
import media from "../../common/media";
import Transfers from "./Transfers";
import Flight from "./FlightTime";
import TravelTime from "./TravelTime";
import Airlines from "./Airlines";
import ResetFilters from "./ResetFilters";
import Filter from "./Filter";

const Filters = styled.section`
  display: none;
  background-color: white;
  margin-top: 16px;
  border-radius: 4px;
  overflow: hidden;

  ${media.lg`
    display: block;
  `};
`;

export default () => (
  <Filters>
    <Transfers />
    <Flight />
    <Filter title="Багаж" />
    <Filter title="Длительность пересадки" />
    <TravelTime />
    <Airlines />
    <Filter title="Аэропорты" />
    <Filter title="Аэропорт пересадки" />
    <Filter title="Агенства" />
    <ResetFilters />
  </Filters>
);
