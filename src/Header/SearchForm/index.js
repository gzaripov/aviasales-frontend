import React from "react";
import styled from "styled-components";
import DepartureCity from "./DepartureCity";
import ArrivalCity from "./ArrivalCity";
import Dates from "./Dates";
import PassengerAndClass from "./PassengerAndClass";

const RoundBox = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Form = styled.form`
  margin: -2px;
  display: flex;
  flex-wrap: wrap;
`;

export default () => (
  <RoundBox>
    <Form>
      <DepartureCity />
      <ArrivalCity />
      <Dates />
      <PassengerAndClass />
    </Form>
  </RoundBox>
);
