import React, { Component } from "react";
import styled from "styled-components";
import russia from "./russia.png";
import russiaSmall from "./russia-small.png";
import fly from "./fly.png";
import nordwind from "./nordwind.png";
import nordwindAlt from "./nordwind-alt.png";
import redWings from "./red-wings.png";
import redWingsSmall from "./redwings-small.png";
import unknown from "./unknown.png";
import airbusIcon from "./airbus.svg";
import timeIcon from "./time.svg";
import smile from "./smile.png";
import lovelySmile from "./lovely-smile.png";
import lightning from "./lightning.png";
import suitcase from "./suitcase.svg";
import bag from "./bag.svg";
import noBag from "./no-bag.svg";
import share from "./share.svg";
import pin from "./pin.svg";
import plane from "./plane.svg";
import filterIcon from "./filter.svg";

const Wrapper = styled.div`
  background: #eaeaea;

  @media (min-width: 768px) {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 10px;
    padding-bottom: 20px;
  }
`;

const TabletFilter = styled.div`
  text-align: center;
  display: none;
  padding: 10px 0 20px;

  @media (min-width: 768px) {
    display: block;
  }
`;

const TabletFilterButton = styled.button`
  background: #23a9f6;
  border-radius: 10px;
  cursor: pointer;
  padding: 25px 35px;
  background-repeat: no-repeat;
  border: none;
  background-image: url(${filterIcon});
  background-position: center;
  transition: all 0.3s ease;
  &:hover {
    background-color: #38d2ff;
  }
`;

const Opener = styled.button`
  border: none;
  background: none;
  position: absolute;
  cursor: pointer;
  display: none;
  right: 0;
  top: 0;
  bottom: 0;
  width: 20px;
  border-left: 1px solid #edf5f7;
  background: #edf5f7;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: all 0.3s;
  z-index: 2;
  @media (min-width: 768px) {
    display: block;
  }
  &:hover {
    background: #ecf9fb;
    border-color: #ecf9fb;
    &:after {
      border-top: 5px solid #00aedb;
    }
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    margin-top: -5px;
    right: 5px;
    width: 0;
    height: 0;
    border-top: 5px solid #abbdc1;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    transition: all 0.3s;
  }
`;

const Card = styled.div`
  margin-bottom: 10px;
  position: relative;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }
`;

const Left = styled.div`
  border-right: 1px solid #dddddd;
  display: none;
  flex-direction: column;
  align-items: center;
  padding: 0;
  background: #fff;
  flex-basis: 30%;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

const Buy = styled.button`
  display: none;
  border: none;
  background: #ff6d00;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
  line-height: 1.5;
  color: #fff;
  min-width: 200px;
  padding: 6px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 10px 0;
  &:hover {
    background: #ffa353;
  }
  @media (min-width: 768px) {
    display: block;
  }
`;

const Things = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const BaggagePrice = styled.span`
  color: #66d295;
  font-size: 10px;
  text-align: center;
`;

const BaggageWithout = styled.span`
  color: #9ab0b9;
  font-size: 10px;
`;

const BaggageChoice = styled.button`
  border: none;
  background: none;
  display: flex;
  cursor: pointer;
  flex-basis: 50%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const BaggageInactive = BaggageChoice.extend`
  background: #f8fbfb;
  border-right: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
`;

const Weight = styled.span`
  font-weight: bold;
  line-height: normal;
  font-size: 10px;
  text-align: center;
  color: #9ab0b9;
  padding: 10px 7px;
  background-image: url(${suitcase});
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: 3px;
`;

const WeightBig = Weight.extend`
  background-image: url(${bag});
`;

const NoBag = Weight.extend`
  background-image: url(${noBag});
  padding: 15px 10px;
`;

const BuyPrice = styled.span`
  font-weight: normal;
  display: block;
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: 900;
  color: #fff;
  font-size: 14px;
  display: block;
  padding: 10px 6px;
  position: relative;
  @media (min-width: 768px) {
    display: none;
  }
  &:after {
    content: "";
    position: absolute;
    background-repeat: no-repeat;
  }
`;

const TitleGreen = Title.extend`
  background: #83d40b;
  &:after {
    background-image: url(${smile});
    width: 14px;
    height: 20px;
    left: 125px;
    top: 10px;
  }
`;

const TitleBrown = Title.extend`
  background: #af7542;
  &:after {
    background-image: url(${lightning});
    width: 14px;
    height: 20px;
    left: 125px;
    top: 10px;
  }
`;

const TitlePurple = Title.extend`
  background: #c279d1;
  &:after {
    background-image: url(${lovelySmile});
    width: 14px;
    height: 20px;
    left: 105px;
    top: 10px;
  }
`;

const Site = styled.span`
  font-size: 12px;
  text-align: center;
  color: #a0b0b9;
`;

const Content = styled.div`
  background-color: #fff;
  padding: 16px 6px;
  @media (min-width: 768px) {
    flex-grow: 1;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 10px 30px 10px 16px;
  }
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: #ff9241;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Share = styled.button`
  width: 17px;
  border: none;
  background: none;
  height: 14px;
  cursor: pointer;
  background-image: url(${share});
  background-repeat: no-repeat;
`;

const TicketSharing = styled.div`
  display: none;
  flex-direction: row;
  flex-direction: row;
  flex-basis: 18%;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const Charter = styled.span`
  font-size: 10px;
  color: #23a9f6;
  padding: 6px 12px;
  border: 1px solid #2196f3;
  border-radius: 15px;
  display: none;
  text-transform: uppercase;
  @media (min-width: 768px) {
    display: block;
  }
`;
const Currency = styled.span``;

const Logo = styled.div``;

const LogoImage = styled.img``;

const LogoSmall = styled.img`
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 4px;
  &:first-child {
    margin-right: 12px;
  }
`;

const Type = styled.div`
  text-align: right;
  flex-basis: 10%;
  flex-grow: 1;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 14px;
  @media (min-width: 768px) {
    display: none;
  }
`;
const BottomBig = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Time = styled.div`
  flex-basis: 40%;
  padding-left: 20px;
  margin-bottom: 10px;
  position: relative;
  &:before {
    content: "";
    width: 12px;
    height: 12px;
    background-image: url(${airbusIcon});
    position: absolute;
    background-repeat: no-repeat;
    left: 1px;
    top: 1px;
  }
`;

const TimeReturn = Time.extend`
  &:before {
    content: "";
    width: 12px;
    height: 12px;
    background-image: url(${airbusIcon});
    position: absolute;
    background-repeat: no-repeat;
    left: 1px;
    top: 1px;
    transform: rotate(180deg);
  }
`;

const Flight = styled.div`
  flex-basis: 38%;
  padding-left: 20px;
  position: relative;
  &:before {
    content: "";
    width: 12px;
    height: 12px;
    background-image: url(${timeIcon});
    position: absolute;
    background-repeat: no-repeat;
    left: 1px;
    top: 1px;
  }
`;
const Filter = styled.div`
  text-align: center;
  padding: 16px 0;
  @media (min-width: 768px) {
    display: none;
  }
`;
const FilterButton = styled.button`
  background: #00ace2;
  opacity: 0.8;
  border-radius: 100px;
  font-weight: 900;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  border: none;
  padding: 10px 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 1;
  }
`;

const FlightBlock = styled.div`
  display: none;
  border-bottom: 1px dashed #dddddd;
  padding: 10px 0;
  &:last-child {
    border: none;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const RouteTime = styled.div`
  font-size: 28px;
  color: #323333;
`;

const City = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: #9ca5a8;
`;

const Date = styled.span`
  font-size: 12px;
  color: #9ca5a8;
`;

const Pin = styled.button`
  background: #fff;
  background-image: url(${pin});
  background-repeat: no-repeat;
  border-radius: 50%;
  padding: 5px;
  height: 20px;
  width: 20px;
  border: 1px solid #9ca5a8;
  background-position: center;
  margin-right: 2px;
`;

const PinTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Departure = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.5;
`;

const Route = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 36px;
  position: relative;
`;

const Arrival = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 1.5;
`;

const Iata = styled.span`
  font-size: 10px;
  color: #4a4a4a;
  text-transform: uppercase;
  margin-top: 15px;
`;

const Dot = styled.span`
  border: 1px solid #a0b0b9;
  padding: 5px;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  position: relative;
  background: #fff;
  transition: all 0.3s ease;
  &:hover {
    border-color: #ff6d00;
  }
  &:before {
    content: "";
    width: 20px;
    height: 14px;
    background-repeat: no-repeat;
    position: absolute;
    top: -30px;
    left: -3px;
    background-image: url(${plane});
    transform: rotate(-40deg);
  }
`;

const DotArrive = Dot.extend`
  &:before {
    transform: rotate(10deg);
  }
`;

const FlightTime = styled.span`
  font-size: 12px;
  text-align: center;
  color: #a0b0b9;
  position: absolute;
  top: 0;
  right: 40%;
`;

const IataWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Line = styled.div`
  background-color: #a0b0b9;
  height: 1px;
  min-width: 200px;
`;

const Warning = styled.span`
  color: #ff654e;
  font-size: 12px;
`;

const Baggage = styled.div`
  margin-top: 5px;
  display: flex;
`;

const ShowMore = styled.button`
  width: 100%;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  background-color: #00acde;
  text-align: center;
  padding: 18px 0;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  display: none;
  margin-top: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #38d2ff;
  }
  @media (min-width: 768px) {
    display: block;
  }
`;

const Proposals = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  min-width: 200px;
  margin-top: 30px;
`;

const ProposalsButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  color: #59bce5;
  width: 100%;
  transition: all 0.3s ease;
  line-height: 1.5;
  &:hover {
    color: #ff8b0f;
  }
`;

const ProposalsAll = ProposalsButton.extend`
  font-weight: bold;
  display: block;
`;

const ProposalsItem = styled.li``;

const Name = styled.span``;

const ProposalPrice = styled.span``;

class Cards extends Component {
  render() {
    return (
      <Wrapper>
        <TabletFilter>
          <TabletFilterButton />
        </TabletFilter>
        <Card>
          <Left>
            <Things>
              <BaggageChoice>
                <Baggage>
                  <Weight>5</Weight>
                  <WeightBig>15</WeightBig>
                </Baggage>
              </BaggageChoice>
            </Things>
            <Buy>
              Купить
              <BuyPrice>за 7 712 ₽</BuyPrice>
            </Buy>
            <Site>на Clickavia</Site>
          </Left>
          <TitleGreen>Самый дешевый</TitleGreen>
          <Content>
            <Top>
              <Price>
                7 712 <Currency>₽</Currency>
              </Price>
              <Logo>
                <LogoImage src={russia} alt="Россия" />
              </Logo>
              <TicketSharing>
                <Charter>Чартер</Charter>
                <Share />
              </TicketSharing>
            </Top>
            <Bottom>
              <Time>00:05 - 03:05</Time>
              <Flight>5 ч</Flight>
              <Type>Прямой</Type>
              <TimeReturn>10:35 - 17:10</TimeReturn>
              <Flight>4 ч 35 м</Flight>
              <Type>Прямой</Type>
            </Bottom>
            <BottomBig>
              <FlightBlock>
                <Departure>
                  <PinTime>
                    <Pin /> <RouteTime>00:05</RouteTime>
                  </PinTime>

                  <City>Москва</City>
                  <Date>24 фев 2018, сб</Date>
                </Departure>
                <Route>
                  <IataWrap>
                    <Dot />
                    <Iata>Vko</Iata>
                  </IataWrap>
                  <Line />
                  <FlightTime>Всего: 5ч</FlightTime>
                  <IataWrap>
                    <DotArrive />
                    <Iata>Bcn</Iata>
                  </IataWrap>
                </Route>
                <Arrival>
                  <RouteTime>03:05</RouteTime>
                  <City>Барселона</City>
                  <Date>24 фев 2018, сб</Date>
                </Arrival>
              </FlightBlock>
              <FlightBlock>
                <Departure>
                  <PinTime>
                    <Pin />
                    <RouteTime>10:35</RouteTime>
                  </PinTime>
                  <City>Барселона</City>
                  <Date>3 мар 2018, сб</Date>
                </Departure>
                <Route>
                  <IataWrap>
                    <Dot />
                    <Iata>bcn</Iata>
                  </IataWrap>
                  <Line />
                  <FlightTime>Всего: 5ч</FlightTime>
                  <IataWrap>
                    <DotArrive />
                    <Iata>vko</Iata>
                  </IataWrap>
                </Route>
                <Arrival>
                  <RouteTime>17:10</RouteTime>
                  <City>Москва</City>
                  <Date>3 мар 2018, сб</Date>
                </Arrival>
              </FlightBlock>
            </BottomBig>
          </Content>
          <Opener />
        </Card>
        <Card>
          <Left>
            <Things>
              <BaggageChoice>
                <Baggage>
                  <Weight>5</Weight>
                  <WeightBig>15</WeightBig>
                </Baggage>
              </BaggageChoice>
              <BaggageChoice>
                <Baggage>
                  <Weight>5</Weight>
                  <WeightBig>15</WeightBig>
                </Baggage>
              </BaggageChoice>
            </Things>
            <Warning>Осталось 4 билета</Warning>
            <Buy>
              Купить
              <BuyPrice>за 9 269 ₽</BuyPrice>
            </Buy>
            <Site>на Biletix</Site>
          </Left>
          <TitleBrown>Самый быстрый</TitleBrown>
          <Content>
            <Top>
              <Price>
                9 269 <Currency>₽</Currency>
              </Price>
              <Logo>
                <LogoImage src={fly} alt="Fly" />
              </Logo>
              <TicketSharing>
                <Charter>Чартер</Charter>
                <Share />
              </TicketSharing>
            </Top>
            <Bottom>
              <Time>07:30 - 09:50</Time>
              <Flight>4 ч 20 м</Flight>
              <Type>Прямой</Type>
              <TimeReturn>11:20 - 17:35</TimeReturn>
              <Flight>4 ч 15 м</Flight>
              <Type>CDG</Type>
            </Bottom>
            <BottomBig>
              <FlightBlock>
                <Departure>
                  <PinTime>
                    <Pin />
                    <RouteTime>07:30</RouteTime>
                  </PinTime>
                  <City>Москва</City>
                  <Date>24 фев 2018, сб</Date>
                </Departure>
                <Route>
                  <IataWrap>
                    <Dot />
                    <Iata>Vko</Iata>
                  </IataWrap>
                  <Line />
                  <FlightTime>Всего: 4ч 15м</FlightTime>
                  <IataWrap>
                    <DotArrive />
                    <Iata>Bcn</Iata>
                  </IataWrap>
                </Route>
                <Arrival>
                  <RouteTime>09:50</RouteTime>
                  <City>Барселона</City>
                  <Date>24 фев 2018, сб</Date>
                </Arrival>
              </FlightBlock>
              <FlightBlock>
                <Departure>
                  <PinTime>
                    <Pin /> <RouteTime>11:20</RouteTime>
                  </PinTime>
                  <City>Барселона</City>
                  <Date>3 мар 2018, сб</Date>
                </Departure>
                <Route>
                  <IataWrap>
                    <Dot />
                    <Iata>bcn</Iata>
                  </IataWrap>
                  <Line />
                  <FlightTime>Всего: 4ч 20м</FlightTime>
                  <IataWrap>
                    <DotArrive />
                    <Iata>vko</Iata>
                  </IataWrap>
                </Route>
                <Arrival>
                  <RouteTime>17:35</RouteTime>
                  <City>Москва</City>
                  <Date>3 мар 2018, сб</Date>
                </Arrival>
              </FlightBlock>
            </BottomBig>
          </Content>
          <Opener />
        </Card>
        <Card>
          <Left>
            <Things>
              <BaggageChoice>
                <Baggage>
                  <Weight>5</Weight>
                  <NoBag />
                </Baggage>
              </BaggageChoice>
            </Things>
            <Buy>
              Купить
              <BuyPrice>за 9 269 ₽</BuyPrice>
            </Buy>
            <Site>на Biletix</Site>
          </Left>
          <TitlePurple>Лучший билет </TitlePurple>
          <Content>
            <Top>
              <Price>
                8 029 <Currency>₽</Currency>
              </Price>
              <Logo>
                <LogoImage src={nordwind} alt="Nordwind" />
              </Logo>
              <TicketSharing>
                <Charter>Чартер</Charter>
                <Share />
              </TicketSharing>
            </Top>
            <Bottom>
              <Time>00:15 - 03:10</Time>
              <Flight>4 ч 55 м</Flight>
              <Type>Прямой</Type>
              <TimeReturn>10:45 - 17:15</TimeReturn>
              <Flight>4 ч 30 м</Flight>
              <Type>Прямой</Type>
            </Bottom>
            <BottomBig>
              <FlightBlock>
                <Departure>
                  <PinTime>
                    <Pin /> <RouteTime>00:15</RouteTime>
                  </PinTime>
                  <City>Москва</City>
                  <Date>24 фев 2018, сб</Date>
                </Departure>
                <Route>
                  <IataWrap>
                    <Dot />
                    <Iata>Vko</Iata>
                  </IataWrap>
                  <Line />
                  <FlightTime>Всего: 4ч 55м</FlightTime>
                  <IataWrap>
                    <DotArrive />
                    <Iata>Bcn</Iata>
                  </IataWrap>
                </Route>
                <Arrival>
                  <RouteTime>03:10</RouteTime>
                  <City>Барселона</City>
                  <Date>24 фев 2018, сб</Date>
                </Arrival>
              </FlightBlock>
              <FlightBlock>
                <Departure>
                  <PinTime>
                    <Pin /> <RouteTime>10:45</RouteTime>
                  </PinTime>
                  <City>Барселона</City>
                  <Date>3 мар 2018, сб</Date>
                </Departure>
                <Route>
                  <IataWrap>
                    <Dot />
                    <Iata>bcn</Iata>
                  </IataWrap>
                  <Line />
                  <FlightTime>Всего: 4ч 10м</FlightTime>
                  <IataWrap>
                    <DotArrive />
                    <Iata>vko</Iata>
                  </IataWrap>
                </Route>
                <Arrival>
                  <RouteTime>17:15</RouteTime>
                  <City>Москва</City>
                  <Date>3 мар 2018, сб</Date>
                </Arrival>
              </FlightBlock>
            </BottomBig>
          </Content>
          <Opener />
        </Card>
        <Card>
          <Left>
            <Things>
              <BaggageInactive>
                <Baggage>
                  <Weight>5</Weight>
                  <WeightBig>x</WeightBig>
                </Baggage>
                <BaggageWithout>Багаж отсутствует</BaggageWithout>
              </BaggageInactive>
              <BaggageChoice>
                <Baggage>
                  <Weight>5</Weight>
                  <WeightBig>12</WeightBig>
                </Baggage>
                <BaggagePrice>- 136 ₽</BaggagePrice>
              </BaggageChoice>
            </Things>
            <Buy>
              Купить
              <BuyPrice>за 9 269 ₽</BuyPrice>
            </Buy>
            <Site>на Biletix</Site>
            <Proposals>
              <ProposalsItem>
                <ProposalsButton>
                  <Name>Clickavia</Name>
                  <ProposalPrice>8 302 ₽</ProposalPrice>
                </ProposalsButton>
              </ProposalsItem>
              <ProposalsItem>
                <ProposalsButton>
                  <Name>Aviakassa</Name>
                  <ProposalPrice>8 376 ₽</ProposalPrice>
                </ProposalsButton>
              </ProposalsItem>
              <ProposalsItem>
                <ProposalsAll>+ еще 3 предложения</ProposalsAll>
              </ProposalsItem>
            </Proposals>
          </Left>
          <Content>
            <Top>
              <Price>
                8 164 <Currency>₽</Currency>
              </Price>
              <Logo>
                <LogoImage src={nordwindAlt} alt="Nordwind" />
              </Logo>
              <TicketSharing>
                <Charter>Чартер</Charter>
                <Share />
              </TicketSharing>
            </Top>
            <Bottom>
              <Time>00:15 - 03:10</Time>
              <Flight>4 ч 55 м</Flight>
              <Type>Прямой</Type>
              <TimeReturn>10:45 - 17:15</TimeReturn>
              <Flight>4 ч 30 м</Flight>
              <Type>Прямой</Type>
            </Bottom>
            <BottomBig>
              <FlightBlock>
                <Departure>
                  <PinTime>
                    <Pin /> <RouteTime>00:15</RouteTime>
                  </PinTime>
                  <City>Москва</City>
                  <Date>24 фев 2018, сб</Date>
                </Departure>
                <Route>
                  <IataWrap>
                    <Dot />
                    <Iata>Vko</Iata>
                  </IataWrap>
                  <Line />
                  <FlightTime>Всего: 4ч 55м</FlightTime>
                  <IataWrap>
                    <DotArrive />
                    <Iata>Bcn</Iata>
                  </IataWrap>
                </Route>
                <Arrival>
                  <RouteTime>03:10</RouteTime>
                  <City>Барселона</City>
                  <Date>24 фев 2018, сб</Date>
                </Arrival>
              </FlightBlock>
              <FlightBlock>
                <Departure>
                  <PinTime>
                    <Pin /> <RouteTime>10:45</RouteTime>
                  </PinTime>
                  <City>Барселона</City>
                  <Date>3 мар 2018, сб</Date>
                </Departure>
                <Route>
                  <IataWrap>
                    <Dot />
                    <Iata>bcn</Iata>
                  </IataWrap>
                  <Line />
                  <FlightTime>Всего: 4ч 10м</FlightTime>
                  <IataWrap>
                    <DotArrive />
                    <Iata>vko</Iata>
                  </IataWrap>
                </Route>
                <Arrival>
                  <RouteTime>17:15</RouteTime>
                  <City>Москва</City>
                  <Date>3 мар 2018, сб</Date>
                </Arrival>
              </FlightBlock>
            </BottomBig>
          </Content>
          <Opener />
        </Card>
        <Card>
          <Left>
            <Things>
              <BaggageInactive>
                <Baggage>
                  <Weight>5</Weight>
                  <WeightBig>x</WeightBig>
                </Baggage>
                <BaggageWithout>Багаж отсутствует</BaggageWithout>
              </BaggageInactive>
              <BaggageChoice>
                <Baggage>
                  <Weight>5</Weight>
                  <WeightBig>12</WeightBig>
                </Baggage>
                <BaggagePrice>- 136 ₽</BaggagePrice>
              </BaggageChoice>
            </Things>
            <Buy>
              Купить
              <BuyPrice>за 9 269 ₽</BuyPrice>
            </Buy>
            <Site>на Biletix</Site>
          </Left>
          <Content>
            <Top>
              <Price>
                8 240 <Currency>₽</Currency>
              </Price>
              <Logo>
                <LogoImage src={redWings} alt="Red Wings" />
              </Logo>
              <TicketSharing>
                <Charter>Чартер</Charter>
                <Share />
              </TicketSharing>
            </Top>
            <Bottom>
              <Time>07:00 - 09:30</Time>
              <Flight>4 ч 30 м</Flight>
              <Type>Прямой</Type>
              <TimeReturn>11:00 - 17:10</TimeReturn>
              <Flight>4 ч 10 м</Flight>
              <Type>Прямой</Type>
            </Bottom>
            <BottomBig>
              <FlightBlock>
                <Departure>
                  <PinTime>
                    <Pin />
                    <RouteTime>00:15</RouteTime>
                  </PinTime>
                  <City>Москва</City>
                  <Date>24 фев 2018, сб</Date>
                </Departure>
                <Route>
                  <IataWrap>
                    <Dot />
                    <Iata>Vko</Iata>
                  </IataWrap>
                  <Line />
                  <FlightTime>Всего: 4ч 55м</FlightTime>
                  <IataWrap>
                    <DotArrive />
                    <Iata>Bcn</Iata>
                  </IataWrap>
                </Route>
                <Arrival>
                  <RouteTime>03:10</RouteTime>
                  <City>Барселона</City>
                  <Date>24 фев 2018, сб</Date>
                </Arrival>
              </FlightBlock>
              <FlightBlock>
                <Departure>
                  <PinTime>
                    <Pin /> <RouteTime>10:45</RouteTime>
                  </PinTime>
                  <City>Барселона</City>
                  <Date>3 мар 2018, сб</Date>
                </Departure>
                <Route>
                  <IataWrap>
                    <Dot />
                    <Iata>bcn</Iata>
                  </IataWrap>
                  <Line />
                  <FlightTime>Всего: 4ч 10м</FlightTime>
                  <IataWrap>
                    <DotArrive />
                    <Iata>vko</Iata>
                  </IataWrap>
                </Route>
                <Arrival>
                  <RouteTime>17:15</RouteTime>
                  <City>Москва</City>
                  <Date>3 мар 2018, сб</Date>
                </Arrival>
              </FlightBlock>
            </BottomBig>
          </Content>
          <Opener />
        </Card>
        <Card>
          <Left>
            <Things>
              <BaggageChoice>
                <Baggage>
                  <Weight>5</Weight>
                  <WeightBig>15</WeightBig>
                </Baggage>
              </BaggageChoice>
            </Things>
            <Buy>
              Купить
              <BuyPrice>за 7 712 ₽</BuyPrice>
            </Buy>
            <Site>на Clickavia</Site>
            <Proposals>
              <ProposalsItem>
                <ProposalsButton>
                  <Name>Clickavia</Name>
                  <ProposalPrice>8 302 ₽</ProposalPrice>
                </ProposalsButton>
              </ProposalsItem>
              <ProposalsItem>
                <ProposalsButton>
                  <Name>Aviakassa</Name>
                  <ProposalPrice>8 376 ₽</ProposalPrice>
                </ProposalsButton>
              </ProposalsItem>
              <ProposalsItem>
                <ProposalsAll>+ еще 3 предложения</ProposalsAll>
              </ProposalsItem>
            </Proposals>
          </Left>
          <Content>
            <Top>
              <Price>
                9 108 <Currency>₽</Currency>
              </Price>
              <Logo>
                <LogoSmall src={russiaSmall} alt="Россия" />
                <LogoSmall src={redWingsSmall} alt="Red Wings" />
              </Logo>
              <TicketSharing>
                <Charter>Чартер</Charter>
                <Share />
              </TicketSharing>
            </Top>
            <Bottom>
              <Time>00:05 - 03:05</Time>
              <Flight>5 ч</Flight>
              <Type>Прямой</Type>
              <TimeReturn>11:00 - 17:10</TimeReturn>
              <Flight>4 ч 10 м</Flight>
              <Type>Прямой</Type>
            </Bottom>
            <BottomBig>
              <FlightBlock>
                <Departure>
                  <PinTime>
                    <Pin /> <RouteTime>00:15</RouteTime>
                  </PinTime>
                  <City>Москва</City>
                  <Date>24 фев 2018, сб</Date>
                </Departure>
                <Route>
                  <IataWrap>
                    <Dot />
                    <Iata>Vko</Iata>
                  </IataWrap>
                  <Line />
                  <FlightTime>Всего: 4ч 55м</FlightTime>
                  <IataWrap>
                    <DotArrive />
                    <Iata>Bcn</Iata>
                  </IataWrap>
                </Route>
                <Arrival>
                  <RouteTime>03:10</RouteTime>
                  <City>Барселона</City>
                  <Date>24 фев 2018, сб</Date>
                </Arrival>
              </FlightBlock>
              <FlightBlock>
                <Departure>
                  <PinTime>
                    <Pin> </Pin>
                    <RouteTime>10:45</RouteTime>
                  </PinTime>
                  <City>Барселона</City>
                  <Date>3 мар 2018, сб</Date>
                </Departure>
                <Route>
                  <IataWrap>
                    <Dot />
                    <Iata>bcn</Iata>
                  </IataWrap>
                  <Line />
                  <FlightTime>Всего: 4ч 10м</FlightTime>
                  <IataWrap>
                    <DotArrive />
                    <Iata>vko</Iata>
                  </IataWrap>
                </Route>
                <Arrival>
                  <RouteTime>17:15</RouteTime>
                  <City>Москва</City>
                  <Date>3 мар 2018, сб</Date>
                </Arrival>
              </FlightBlock>
            </BottomBig>
          </Content>
          <Opener />
        </Card>
        <Card>
          <Left>
            <Things>
              <BaggageChoice>
                <Baggage>
                  <Weight>5</Weight>
                  <WeightBig>15</WeightBig>
                </Baggage>
              </BaggageChoice>
            </Things>
            <Buy>
              Купить
              <BuyPrice>за 7 712 ₽</BuyPrice>
            </Buy>
            <Site>на Clickavia</Site>
          </Left>
          <Content>
            <Top>
              <Price>
                9 485 <Currency>₽</Currency>
              </Price>
              <Logo>
                <LogoSmall src={russiaSmall} alt="Россия" />
                <LogoSmall src={unknown} alt="Unknown" />
              </Logo>
              <TicketSharing>
                <Charter>Чартер</Charter>
                <Share />
              </TicketSharing>
            </Top>
            <Bottom>
              <Time>00:05 - 03:05</Time>
              <Flight>5 ч</Flight>
              <Type>Прямой</Type>
              <TimeReturn>11:20 - 17:35</TimeReturn>
              <Flight>4 ч 15 м</Flight>
              <Type>Прямой</Type>
            </Bottom>
            <BottomBig>
              <FlightBlock>
                <Departure>
                  <PinTime>
                    <Pin /> <RouteTime>00:15</RouteTime>
                  </PinTime>
                  <City>Москва</City>
                  <Date>24 фев 2018, сб</Date>
                </Departure>
                <Route>
                  <IataWrap>
                    <Dot />
                    <Iata>Vko</Iata>
                  </IataWrap>
                  <Line />
                  <FlightTime>Всего: 4ч 55м</FlightTime>
                  <IataWrap>
                    <DotArrive />
                    <Iata>Bcn</Iata>
                  </IataWrap>
                </Route>
                <Arrival>
                  <RouteTime>03:10</RouteTime>
                  <City>Барселона</City>
                  <Date>24 фев 2018, сб</Date>
                </Arrival>
              </FlightBlock>
              <FlightBlock>
                <Departure>
                  <PinTime>
                    <Pin /> <RouteTime>10:45</RouteTime>
                  </PinTime>
                  <City>Барселона</City>
                  <Date>3 мар 2018, сб</Date>
                </Departure>
                <Route>
                  <IataWrap>
                    <Dot />
                    <Iata>bcn</Iata>
                  </IataWrap>
                  <Line />
                  <FlightTime>Всего: 4ч 10м</FlightTime>
                  <IataWrap>
                    <DotArrive />
                    <Iata>vko</Iata>
                  </IataWrap>
                </Route>
                <Arrival>
                  <RouteTime>17:15</RouteTime>
                  <City>Москва</City>
                  <Date>3 мар 2018, сб</Date>
                </Arrival>
              </FlightBlock>
            </BottomBig>
          </Content>
          <Opener />
        </Card>
        <ShowMore>Показать еще 10 билетов!</ShowMore>
        <Filter>
          <FilterButton>Фильтровать</FilterButton>
        </Filter>
      </Wrapper>
    );
  }
}

export default Cards;
