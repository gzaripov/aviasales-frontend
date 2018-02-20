import React from "react";
import media from "../../../common/media";
import styled from "styled-components";
import rating from "./rating.svg";

const RatingBarText = styled.span`
  color: white;
  font-size: 14px;
  margin-left: 8px;
`;

const RatingBar = styled.span`
  ${media.sm`
    margin-left: 260px;
  `};

  ${media.md`
    margin-left: 0;
  `};
`;

export default () => (
  <RatingBar>
    <img src={rating} alt="Rating" />
    <RatingBarText>Более 103 000 оценок</RatingBarText>
  </RatingBar>
);
