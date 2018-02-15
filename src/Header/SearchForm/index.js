import React from "react";
import styled from "styled-components";
import DepartureCity from "./DepartureCity";
import ArrivalCity from "./ArrivalCity";
import DepartureDate from "./DepartureDate";
import ArrivalDate from "./ArrivalDate";
import PassengerAndClass from "./PassengerAndClass";

const TicketBox = styled.div`
  background-color: white;
  padding: 16px;
  margin: 2px;
`;

const Container = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Form = styled.form`
  margin: -2px;
`;

const DepartureBox = styled.div`
  margin-left: 2px;
  margin-right: 2px;
`;

const DepartureTicketBox = styled.div`
  background-color: white;
  padding: 16px;
`;

const DividerDiv = styled.div`
  width: 2px;
`;

const DepartureDates = styled.div`
  display: flex;
`;

export default () => (
  <Container>
    <Form>
      <TicketBox>
        <DepartureCity />
      </TicketBox>
      <TicketBox>
        <ArrivalCity />
      </TicketBox>
      <DepartureBox>
        <DepartureDates>
          <DepartureTicketBox>
            <DepartureDate />
          </DepartureTicketBox>
          <DividerDiv />
          <DepartureTicketBox>
            <ArrivalDate />
          </DepartureTicketBox>
        </DepartureDates>
      </DepartureBox>
      <TicketBox>
        <PassengerAndClass />
      </TicketBox>
    </Form>
  </Container>
);
