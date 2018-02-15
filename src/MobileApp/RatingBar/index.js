import React from "react";
import styled from "styled-components";
import rating from "./rating.svg";

const RatingBarText = styled.span`
  color: white;
  font-size: 14px;
  margin-left: 8px;
`;

export default () => (
  <span>
    <img src={rating} alt="Rating" />
    <RatingBarText>Более 103 000 оценок</RatingBarText>
  </span>
);
