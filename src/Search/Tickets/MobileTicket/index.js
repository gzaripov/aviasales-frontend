import React from "react";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";
import media from "../../../common/media";
import Logos from "../Logos";
import Flight from "./Flight";

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

const TripInfo = styled.div`
  padding: 16px 0;
`;

const Price = styled.p`
  font-weight: bold;
  line-height: normal;
  font-size: 22px;
  color: #ff9241;
`;

const Container = styled.div`
  ${media.sm`
    display: none;
  `};
`;

export default props => (
  <Container className={props.className}>
    <FlightStatus status={props.data.status} />
    <TripInfo>
      <PriceAndLogos>
        <Price>
          <FormattedNumber
            value={props.data.price}
            // eslint-disable-next-line
            style="decimal"
            minimumFractionDigits={0}
            maximumFractionDigits={0}
          />{" "}
          ₽
        </Price>
        <Logos logos={props.data.logos} />
      </PriceAndLogos>
      <Flight data={props.data.flight.depart} direction="depart" />
      <Flight data={props.data.flight.return} direction="return" />
    </TripInfo>
  </Container>
);
