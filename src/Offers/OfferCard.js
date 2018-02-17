import React from "react";
import media from "../common/media";
import styled from "styled-components";

const Heading = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #cd2027;
  color: white;
`;

const Title = styled.span`
  padding: 22px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 30px;
`;

const HeaderIcon = styled.img`
  margin-left: auto;
`;

const Information = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 16px 16px 8px;
`;

const PriceAndDaysLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  text-align: right;
`;

const Price = styled.span`
  font-size: 20px;
  color: #5c5c5c;
  text-transformation: uppercase;
  margin-bottom: 10px;
`;

const PricePrefix = styled.span`
  font-size: 12px;
  color: #5c5c5c;
`;

const DaysLeft = styled.span`
  font-size: 12px;
  color: #d93633;
`;

const Text = styled.p`
  text-align: left;
  font-size: 12px;
  color: #242424;
  padding-left: 8px;
  padding-right: 8px;
`;

const LearnMoreButton = styled.button`
  width: 100%;
  border: 2px solid #cd1f27;
  border-radius: 3px;
  margin-bottom: 16px;
  margin-top: 44px;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #d93533;
  padding: 10px 0;
  background: #fff;
`;

const Footer = styled.div`
  margin-left: 8px;
  margin-right: 8px;
`;

const OfferCard = styled.div`
  background-color: white;
  margin-bottom: 12px;

  max-width: 300px;

  ${media.md`
    max-width: 240px;
  `};

  ${media.xl`
    max-width: 300px;
  `};
`;

const AviaCompanyLogo = styled.img`
  width: 100px;
  height: 25px;
`;

export default props => (
  <OfferCard>
    <Heading>
      <Title>{props.offer.title}</Title>
      <HeaderIcon src={props.offer.icon} />
    </Heading>
    <Information>
      <div>
        <AviaCompanyLogo
          src={props.offer.aviaCompanyPic}
          alt="Avia company pic"
        />
      </div>
      <PriceAndDaysLeft>
        <Price>
          <PricePrefix>от</PricePrefix>
          &nbsp;{props.offer.price}
        </Price>
        <DaysLeft>Осталось {props.offer.daysLeft}</DaysLeft>
      </PriceAndDaysLeft>
    </Information>
    <Text>{props.offer.text}</Text>
    <Text>{props.offer.from}</Text>
    <Footer>
      <LearnMoreButton>Узнать подробности</LearnMoreButton>
    </Footer>
  </OfferCard>
);
