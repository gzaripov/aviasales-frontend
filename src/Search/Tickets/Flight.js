import React from "react";
import styled from "styled-components";
import planeTakeoff from "./img/plane-takeoff.svg";
import planeLanfing from "./img/plane-landing.svg";
import pin from "./img/pin.svg";

const Origin = styled.div`
  display: flex;
  padding: 0 16px;
  flex-direction: column;
  text-align: left;
`;

const Destination = styled.div`
  display: flex;
  padding: 0 16px;
  flex-direction: column;
  text-align: right;
  align-items: flex-end;
`;

const Time = styled.p`
  display: flex;
  line-height: 40px;
  font-size: 28px;
  color: #323333;
`;

const TimeIcon = styled.img`
  margin-right: 8px;
`;

const City = styled.p`
  font-weight: 500;
  line-height: 18px;
  font-size: 12px;
  color: #9ca5a8;
`;

const FlightDate = styled.p`
  line-height: 18px;
  font-size: 12px;
  color: #9ca5a8;
`;

const Route = styled.div`
  display: flex;
  flex: 1;
  padding: 0 12px;
  flex-direction: column;
`;

const RouteRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RouteDuration = styled(RouteRow)`
  margin-bottom: 12px;
`;

const RoutePath = styled(RouteRow)`
  margin-bottom: 12px;
`;

const RouteIatas = styled(RouteRow)`
  margin-top: auto;
`;

const Duration = styled.span`
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #a0b0b9;
`;

const RoutePoint = styled.div`
  border: 1px solid #a0b0b9;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 5px;
`;

const Path = styled.div`
  height: 1px;
  flex: 1;
  background-color: #a0b0b9;
  margin: 0 2px;
`;

const Iata = styled.span`
  font-weight: 500;
  line-height: 18px;
  font-size: 10px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

const Flight = styled.div`
  display: flex;
  padding: 12px 0;
`;

export default props => (
  <Flight>
    <Origin>
      <Time>
        <TimeIcon src={pin} alt="Pin icon" />
        <span>{props.data.origin.time}</span>
      </Time>
      <City>{props.data.origin.city}</City>
      <FlightDate>{props.data.origin.date}</FlightDate>
    </Origin>
    <Route>
      <RouteDuration>
        <img src={planeTakeoff} alt="Plane icon" />
        <Duration>{props.data.duration}</Duration>
        <img src={planeLanfing} alt="Plane icon" />
      </RouteDuration>
      <RoutePath>
        <RoutePoint />
        <Path />
        <RoutePoint />
      </RoutePath>
      <RouteIatas>
        <Iata>{props.data.origin.iata}</Iata>
        <Iata>{props.data.dest.iata}</Iata>
      </RouteIatas>
    </Route>
    <Destination>
      <Time>
        <span>{props.data.dest.time}</span>
      </Time>
      <City>{props.data.dest.city}</City>
      <FlightDate>{props.data.dest.date}</FlightDate>
    </Destination>
  </Flight>
);
