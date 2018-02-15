import React from "react";
import styled from "styled-components";

const OfferFooter = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;
  color: white;
`;

const AllSpecialOffers = styled.a`
  text-decoration-line: underline;
`;

const Footnote = styled.p`
  padding-top: 8px;
`;

export default () => (
  <OfferFooter>
    <p>
      <AllSpecialOffers>Смотреть все спецпредложения</AllSpecialOffers>
    </p>
    <Footnote>* средняя цена по направлению</Footnote>
  </OfferFooter>
);
