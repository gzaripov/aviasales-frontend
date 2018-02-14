import React from "react";
import styled from "styled-components";
import Flex from "../common/Flex";

import arrow from "./icons/arrow.svg";
import arrowDown from "./icons/arrow_down.svg";
import calendar from "./icons/calendar.svg";

const CityInput = styled.input`
  width: 100%;
`;

const CityIndex = styled.span`
  text-transform: uppercase;
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
  margin-left: auto;
  margin-right: 12px;
`;

const TicketImg = styled.img`
  margin-left: auto;
`;

const DepartureCity = () => (
  <Flex>
    <CityInput value="Москва" placeholder="Город вылета" />
    <CityIndex>mow</CityIndex>
    <TicketImg src={arrow} alt="Arrow" />
  </Flex>
);

const ArrivalCity = () => (
  <Flex>
    <CityInput value="" placeholder="Город прибытия" />
    {/* <CityIndex>mow</CityIndex>*/}
    <TicketImg src={arrow} alt="Arrow" />
  </Flex>
);

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

const DepartureDate = () => (
  <Flex>
    <CityInput value="" placeholder="Туда" disabled />
    <TicketImg src={calendar} alt="Arrow" />
  </Flex>
);

const ArrivalDate = () => (
  <Flex>
    <CityInput value="" placeholder="Обратно" disabled />
    <TicketImg src={calendar} alt="Arrow" />
  </Flex>
);

const Text = styled.span``;
const SecondaryText = styled.span`
  color: #a0b0b9;
`;

const PassengerAndClass = () => (
  <Flex>
    <Text>1 пассажир,&nbsp;</Text>
    <SecondaryText>эконом</SecondaryText>
    <TicketImg src={arrowDown} alt="Arrow" />
  </Flex>
);

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
        <Flex>
          <DepartureTicketBox>
            <DepartureDate />
          </DepartureTicketBox>
          <DividerDiv />
          <DepartureTicketBox>
            <ArrivalDate />
          </DepartureTicketBox>
        </Flex>
      </DepartureBox>
      <TicketBox>
        <PassengerAndClass />
      </TicketBox>
    </Form>
  </Container>
);
