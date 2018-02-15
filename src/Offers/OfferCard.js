import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #cd2027;
  color: white;
`;

const Title = styled.span`
  padding: 22px 0;
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

const Description = styled.p`
  text-align: left;
  font-size: 12px;
  color: #242424;
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 44px;
`;

const LearnMoreButton = styled.button`
  width: 100%;
  border: 2px solid #cd1f27;
  border-radius: 3px;
  margin-bottom: 16px;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #d93533;
  padding: 10px 0;
`;

const Footer = styled.div`
  margin-left: 8px;
  margin-right: 8px;
`;

const OfferCard = styled.div`
  background-color: white;
  margin-bottom: 12px;
`;

export default props => (
  <OfferCard>
    <Header>
      <Title>{props.offer.title}</Title>
      <HeaderIcon src={props.offer.icon} />
    </Header>
    <Information>
      <div>
        <img src={props.offer.aviaCompanyPic} alt="Avia company pic" />
      </div>
      <PriceAndDaysLeft>
        <Price>
          <PricePrefix>от</PricePrefix>
          &nbsp;{props.offer.price}
        </Price>
        <DaysLeft>Осталось {props.offer.daysLeft}</DaysLeft>
      </PriceAndDaysLeft>
    </Information>
    <Description>{props.offer.description}</Description>
    <Footer>
      <LearnMoreButton>Узнать подробности</LearnMoreButton>
    </Footer>
  </OfferCard>
);
