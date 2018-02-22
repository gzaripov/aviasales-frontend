import React from "react";
import styled from "styled-components";
import media from "../../../common/media";
import { DepartureCity, ArrivalCity } from "./City";
import Dates from "./Dates";
import PassengerAndClass from "./PassengerAndClass";
import SearchButton from "./SearchButton";

const RoundBox = styled.div`
  border-radius: 4px;
  overflow: hidden;
  display: none;
  flex: 1;

  ${media.sm`
    display: flex;
    justify-center: center;
  `};
`;

const Form = styled.form`
  margin: -2px;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  flex-wrap: wrap;
  position: relative;
`;

export default () => (
  <RoundBox>
    <Form>
      <DepartureCity />
      <ArrivalCity />
      <Dates />
      <PassengerAndClass />
      <SearchButton />
    </Form>
  </RoundBox>
);
