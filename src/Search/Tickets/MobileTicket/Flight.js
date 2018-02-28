import React from "react";
import styled from "styled-components";
import aircraftLeft from "./img/aircraft-left.svg";
import aircraftRight from "./img/aircraft-right.svg";
import clock from "./img/clock.svg";
import Duration from "../../../common/Duration";

const Flight = styled.div`
  display: flex;
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

export default props => (
  <Flight>
    <FlightTime>
      <Icon
        src={props.direction === "return" ? aircraftLeft : aircraftRight}
        alt="Aircraft"
      />
      {props.data.origin.time} — {props.data.dest.time}
    </FlightTime>
    <FlightTime>
      <Icon src={clock} alt="Clock" />
      <Duration duration={props.data.duration} />
    </FlightTime>
    <FlightType>{props.data.type}</FlightType>
  </Flight>
);
