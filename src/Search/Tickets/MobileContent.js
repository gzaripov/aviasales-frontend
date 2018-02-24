import React from "react";
import styled from "styled-components";
import media from "../../common/media";
import aircraftLeft from "./img/aircraft-left.svg";
import aircraftRight from "./img/aircraft-right.svg";
import clock from "./img/clock.svg";

const Status = styled.h4`
  margin: 0;
  line-height: 18px;
  font-size: 14px;
  color: #ffffff;
  font-weight: 900;
  padding: 7px 6px;
  margin-left: auto;
  text-align: left;
`;

const Cheapest = Status.extend`
  background: #83d40b;
`;

const Fastest = Status.extend`
  background: #af7542;
`;

const Best = Status.extend`
  background: #c279d1;
`;

const flightStatuses = {
  cheapest: (
    <Cheapest>
      Самый дешевый&nbsp;&nbsp;
      <span role="img" aria-label="emoji">
        ️🤑
      </span>
    </Cheapest>
  ),
  fastest: (
    <Fastest>
      Самый быстрый&nbsp;&nbsp;
      <span role="img" aria-label="emoji">
        ️⚡
      </span>
    </Fastest>
  ),
  best: (
    <Best>
      Лучший билет&nbsp;&nbsp;
      <span role="img" aria-label="emoji">
        ️😍
      </span>
    </Best>
  )
};

const FlightStatus = props => {
  if (flightStatuses[props.status]) {
    return flightStatuses[props.status];
  }
  return null;
};

const PriceAndLogos = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
`;

const FlightTime = styled.time`
  display: flex;
  margin-top: 10px;
  line-height: 18px;
  font-size: 14px;
  text-align: left;
  margin-right: 16px;
`;

const FlightType = styled.p`
  margin-top: 10px;
  margin-left: auto;
  line-height: 18px;
  font-size: 14px;
  text-align: right;
`;

const Icon = styled.img`
  margin-right: 8px;
`;

const TripInfo = styled.div`
  padding: 16px 0;
`;

const Price = styled.p`
  font-weight: bold;
  line-height: normal;
  font-size: 22px;
  color: #ff9241;
`;

const LogosContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

export const Logos = props => (
  <LogosContainer className={props.className}>
    {props.logos.map((logo, index) => (
      <Logo src={logo} key={index} alt="Aircompany Logo" />
    ))}
  </LogosContainer>
);

const Logo = styled.img`
  padding: 4px;
  margin-left: 10px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  width: 36px;
  height: 36px;

  :only-child {
    padding: 0;
    border: none;
    border-radius: 0;
    width: 99px;
    height: 36px;
  }
`;

const Container = styled.div`
  ${media.sm`
    display: none;
  `};
`;

const Flight = styled.div`
  display: flex;
  padding: 0 8px;
`;

export const MobileContent = props => (
  <Container className={props.className}>
    <FlightStatus status={props.data.status} />
    <TripInfo>
      <PriceAndLogos>
        <Price>{props.data.price}</Price>
        <Logos logos={props.data.logos} />
      </PriceAndLogos>
      <Flight>
        <FlightTime>
          <Icon src={aircraftLeft} alt="Aircraft" />
          {props.data.flight.depart.origin.time} —{" "}
          {props.data.flight.depart.dest.time}
        </FlightTime>
        <FlightTime>
          <Icon src={clock} alt="Clock" />
          {props.data.flight.depart.duration}
        </FlightTime>
        <FlightType>{props.data.flight.depart.type}</FlightType>
      </Flight>
      <Flight>
        <FlightTime>
          <Icon src={aircraftRight} alt="Aircraft" />
          {props.data.flight.return.origin.time} —{" "}
          {props.data.flight.return.dest.time}
        </FlightTime>
        <FlightTime>
          <Icon src={clock} alt="Clock" />
          {props.data.flight.return.duration}
        </FlightTime>
        <FlightType>{props.data.flight.return.type}</FlightType>
      </Flight>
    </TripInfo>
  </Container>
);
