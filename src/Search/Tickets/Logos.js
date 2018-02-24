import React from "react";
import styled from "styled-components";

const Logo = styled.img`
  padding: 4px;
  margin-left: 10px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  width: 36px;
  height: 36px;

  :only-child {
    padding: 0;
    border: none;
    border-radius: 0;
    width: 99px;
    height: 36px;
  }
`;

const Logos = styled.div`
  display: flex;
  margin-left: auto;
`;

export default props => (
  <Logos className={props.className}>
    {props.logos.map((logo, index) => (
      <Logo src={logo} key={index} alt="Aircompany Logo" />
    ))}
  </Logos>
);
