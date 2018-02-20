import React from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";

const Currency = styled.p`
  border: 1px solid #ffffff;
  border-radius: 100px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  padding: 6px 12px;
  color: white;
`;

const BackArrow = styled.img``;

const Header = styled.header`
  display: flex;
  background: linear-gradient(
    100deg,
    #00b0de -46.32%,
    #01aedc -42.65%,
    #02abdb -38.93%,
    #02abdb -35.24%,
    #02abdb -35.02%,
    #196ebd 52.98%
  );
`;

export default () => (
  <Header>
    <Currency>RUB</Currency>
    <BackArrow src={arrow} alt="Back arrow" />
  </Header>
);
