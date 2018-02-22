import React from "react";
import styled from "styled-components";
import media from "../../common/media";
import Button from "../../common/Button";
import { Logos } from "./MobileContent";
import open from "./img/open.svg";
import share from "./img/share.svg";
import handbag from "./img/handbag.svg";
import suitcase from "./img/suitcase.svg";
import Flight from "./Flight";

const Hand = styled.span`
  position: relative;
`;

const Agency = styled.p`
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #a0b0b9;
`;

const SuggestionText = styled.span`
  line-height: 18px;
  font-size: 12px;
  color: #59bce5;
`;

const SuggestionAgency = styled(SuggestionText)``;

const SuggestionPrice = styled(SuggestionText)`
  font-weight: 500;
  text-align: right;
`;

const OtherSuggestions = styled(SuggestionText)`
  font-weight: 500;
  text-align: center;
`;

const TicketOpener = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #edf5f7;
  padding: 5px;
`;

const Suggestion = props => (
  <p>
    <SuggestionAgency>{props.agency}</SuggestionAgency>
    <SuggestionPrice>{props.price}</SuggestionPrice>
  </p>
);

const Purchase = styled.div`
  border-right: 1px solid #dddddd;
`;

const BuyButton = styled(Button)`
  background: #ff6d00;
  border-radius: 4px;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  margin: 16px 24px 8px 24px;
  padding: 8px 42px;
`;

const BuyButtonText = styled.p`
  font-weight: 500;
  line-height: 18px;
`;

const BuyButtonPrice = styled.p`
  line-height: 18px;
  margin-top: 2px;
`;

const JetInfo = styled.div`
  display: flex;
  align-items: center;
`;

const JetLogos = Logos.extend`
  margin: 0 auto 0 6px;
`;

const Charter = styled.p`
  border: 1px solid #2196f3;
  border-radius: 15px;
  padding: 4px 11px;
  line-height: 18px;
  font-size: 10px;
  color: #23a9f6;
  margin-left: auto;
  margin-right: 14px;
  text-transform: uppercase;
`;

const Share = styled.img`
  margin-right: 10px;
`;

const TicketInfo = styled.div`
  display: flex;
  padding-top: 16px;
  padding-bottom: 12px;
  flex: 1;
  flex-direction: column;
`;

const FlightInfoDivider = styled.div`
  flex: 1;
  margin: 0 16px;
  border-bottom: 1px dashed #dddddd;
`;

const Content = styled.div`
  display: none;

  ${media.sm`
    display: flex;
  `};
`;

const Bag = styled.span`
  position: relative;
  margin: 0 2px;
`;

const BagText = styled.span`
  position: absolute;
  top: 7px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  font-size: 10px;
  text-align: center;
  letter-spacing: -0.4px;
  color: #9ab0b9;
`;

const Baggage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

function generateBaggage({ hand, bag }) {
  if (!hand || !bag) return null;
  return (
    <Baggage>
      <Bag>
        <img src={handbag} alt="Suitcase icon" />
        <BagText>{hand}</BagText>
      </Bag>
      <Bag>
        <img src={suitcase} alt="Bag icon" />
        <BagText>{bag}</BagText>
      </Bag>
    </Baggage>
  );
}

const TicketsLeft = styled.p`
  line-height: 18px;
  font-size: 12px;
  text-align: center;
  color: #ff654e;
`;

export default props => (
  <Content>
    <Purchase>
      <Baggage />
      {generateBaggage(props.data.baggage.primary)}
      {props.data.ticketsLeft >= 1 && (
        <TicketsLeft>Осталось {props.data.ticketsLeft} билета</TicketsLeft>
      )}
      <BuyButton>
        <BuyButtonText>Купить</BuyButtonText>
        <BuyButtonPrice>за {props.data.price}</BuyButtonPrice>
      </BuyButton>
      <Agency>{props.data.agency}</Agency>
    </Purchase>
    <TicketInfo>
      <JetInfo>
        <JetLogos logos={props.data.logos} />
        {props.data.isCharter && <Charter>чартер</Charter>}
        <Share src={share} alt="Share icon" />
      </JetInfo>
      <Flight data={props.data.flight.depart} />
      <FlightInfoDivider />
      <Flight data={props.data.flight.return} />
    </TicketInfo>
    <TicketOpener>
      <img src={open} alt="Arrow" />
    </TicketOpener>
  </Content>
);
