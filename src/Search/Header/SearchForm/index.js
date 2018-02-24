import React from "react";
import styled from "styled-components";
import media from "../../../common/media";
import { DepartureCity, ArrivalCity } from "./City";
import Dates from "./Dates";
import PassengerAndClass from "./PassengerAndClass";
import SearchButton from "./SearchButton";

const Form = styled.form`
  display: none;

  display: flex;
  flex: 1;
  justify-content: flex-end;
  flex-wrap: wrap;
  position: relative;

  ${media.sm`
    display: flex;
    justify-center: center;
  `};
`;

export default () => (
  <Form>
    <DepartureCity />
    <ArrivalCity />
    <Dates />
    <PassengerAndClass />
    <SearchButton />
  </Form>
);
