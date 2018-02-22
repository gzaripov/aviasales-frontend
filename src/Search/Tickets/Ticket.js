import React from "react";
import styled from "styled-components";
import aircraftLeft from "./img/aircraft-left.svg";
import aircraftRight from "./img/aircraft-right.svg";
import clock from "./img/clock.svg";

const Ticket = styled.div`
  margin-bottom: 8px;
  background-color: #fff;
`;

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

const Price = styled.p`
  font-weight: bold;
  line-height: normal;
  font-size: 22px;
  color: #ff9241;
`;

const Logos = styled(props => (
  <div className={props.className}>
    {props.logos.map((logo, index) => <Logo img={logo} key={index} />)}
  </div>
))`
  display: flex;
  margin-left: auto;
`;

const Logo = styled(props => (
  <img className={props.className} src={props.img} alt="Aircompany Logo" />
))`
  padding: 4px;
  margin-left: 10px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  width: 28px;
  height: 28px;

  :only-child {
    padding: 0;
    border: none;
    border-radius: 0;
    width: 99px;
    height: 36px;
  }
`;

const FlightStatus = props => {
  if (props.status === "cheapest") {
    return (
      <Cheapest className={props.className}>
        Самый дешевый&nbsp;&nbsp;
        <span role="img" aria-label="emoji">
          ️🤑
        </span>
      </Cheapest>
    );
  }
  if (props.status === "fastest") {
    return (
      <Fastest>
        Самый быстрый&nbsp;&nbsp;
        <span role="img" aria-label="emoji">
          ️⚡
        </span>
      </Fastest>
    );
  }
  if (props.status === "best") {
    return (
      <Best>
        Лучший билет&nbsp;&nbsp;
        <span role="img" aria-label="emoji">
          ️😍
        </span>
      </Best>
    );
  }
  console.log("null");
  return null;
};

const PriceAndLogos = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
`;

const FlightTime = styled.p`
  margin-top: 10px;
  line-height: 18px;
  font-size: 14px;
  text-align: left;
`;

const FlightType = styled.p`
  margin-top: 10px;
  margin-left: auto;
  line-height: 18px;
  font-size: 14px;
  text-align: right;
`;

const FlightInfoIcon = styled.img`
  margin-right: 8px;
`;

const TripInfo = styled.div`
  padding: 16px 0;
`;

const MobileContent = props => (
  <div>
    <FlightStatus status={props.data.status} />
    <TripInfo>
      <PriceAndLogos>
        <Price>{props.data.price}</Price>
        <Logos logos={props.data.logos} />
      </PriceAndLogos>
      <div className="container">
        <div className="row">
          <div className="col-xs-5">
            <FlightTime>
              <FlightInfoIcon src={aircraftLeft} alt="Aircraft" />
              {props.data.flight.depart.origin.time} —{" "}
              {props.data.flight.depart.dest.time}
            </FlightTime>
          </div>
          <div className="col-xs-4">
            <FlightTime>
              <FlightInfoIcon src={clock} alt="Clock" />
              {props.data.flight.depart.duration}
            </FlightTime>
          </div>
          <div className="col-xs-3">
            <FlightType>{props.data.flight.depart.type}</FlightType>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-5">
            <FlightTime>
              <FlightInfoIcon src={aircraftRight} alt="Aircraft" />
              {props.data.flight.return.origin.time} —{" "}
              {props.data.flight.return.dest.time}
            </FlightTime>
          </div>
          <div className="col-xs-4">
            <FlightTime>
              <FlightInfoIcon src={clock} alt="Clock" />
              {props.data.flight.return.duration}
            </FlightTime>
          </div>
          <div className="col-xs-3">
            <FlightType>{props.data.flight.return.type}</FlightType>
          </div>
        </div>
      </div>
    </TripInfo>
  </div>
);

export default props => (
  <Ticket>
    <MobileContent data={props.data} />
  </Ticket>
);
