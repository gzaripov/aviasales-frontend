import React from "react";
import media from "../common/media";
import styled from "styled-components";

const OfferFooter = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  color: white;

  @media screen and (min-width: ${media.md}) {
    margin-top: 12px;
    display: flex;
    align-items: center;
  }
`;

const AllSpecialOffers = styled.a`
  text-decoration-line: underline;
`;

const Footnote = styled.p`
  padding-top: 8px;
  margin-left: auto;
`;

export default () => (
  <OfferFooter>
    <p>
      <AllSpecialOffers>Смотреть все спецпредложения</AllSpecialOffers>
    </p>
    <Footnote>* средняя цена по направлению</Footnote>
  </OfferFooter>
);
