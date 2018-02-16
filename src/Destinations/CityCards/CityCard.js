import React from "react";
import styled from "styled-components";
import media from "../../common/media";

const Image = styled.div`
  width: 100%;
  height: 126px;
  background-image: ${props => `url(${props.url})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: ${media.md}) {
    height: 212px;
  }
`;

const City = styled.span`
  color: #5b5b5c;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 4px;

  @media screen and (min-width: ${media.md}) {
    font-size: 22px;
    line-height: 32px;
  }
`;

const SearchPrice = styled.a`
  margin-left: auto;
  text-decoration: none;
  font-size: 14px;
  color: #00bae8;
  margin-bottom: 4px;

  @media screen and (min-width: ${media.md}) {
    font-size: 22px;
  }
`;

const Country = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  color: #a0b0b9;
  line-height: 20px;
`;

const FlightDate = styled.span`
  margin-left: auto;
  font-size: 12px;
  line-height: 20px;
  color: #a0b0b9;
`;

const Flag = styled.div`
  display: none;
  justify-content: center;
  margin-left: 23px;
  align-items: flex-start;
  margin-top: 14px;

  @media screen and (min-width: ${media.md}) {
    display: flex;
  }
`;

const Info = styled.div`
  padding: 16px;
  flex-grow: 1;

  @media screen and (min-width: ${media.md}) {
    padding-left: 8px;
  }
`;

const FlagAndInfo = styled.div`
  display: flex;
`;

const PrimaryInfo = styled.div`
  display: flex;
  align-items: center;
`;

const SecondaryInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Card = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 75, 93, 0.12);
  margin-top: 12px;
  overflow: hidden;
`;

export default props => (
  <Card>
    <Image url={props.cardData.imageUrl} />
    <FlagAndInfo>
      <Flag>
        <img src={props.cardData.flag} alt="Flag" />
      </Flag>
      <Info>
        <PrimaryInfo>
          <City>{props.cardData.city}</City>
          <SearchPrice>Найти от {props.cardData.price} ₽</SearchPrice>
        </PrimaryInfo>
        <SecondaryInfo>
          <Country>{props.cardData.country}</Country>
          <FlightDate>{props.cardData.date}</FlightDate>
        </SecondaryInfo>
      </Info>
    </FlagAndInfo>
  </Card>
);
