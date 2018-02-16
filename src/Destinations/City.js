import React from "react";
import styled from "styled-components";
import media from "../common/media";
import edit from "./edit.svg";

const Text = styled.span`
  font-weight: 500;
  text-align: center;
`;

const CitySelector = styled.span`
  color: #00ace2;
  display: inline-block;
`;

const Edit = styled.div`
  display: inline-block;
  height: 16px;
  width: 16px;
  margin-left: 8px;
  margin-bottom: -2px;
  background-image: url(${edit});
`;

const City = styled.div`
  padding: 0 40px;
  font-size: 18px;

  @media screen and (min-width: ${media.sm}) {
    padding: 0 100px;
  }
  @media screen and (min-width: ${media.md}) {
    padding: 0 150px;
    font-size: 24px;
    line-height: 36px;
  }
  @media screen and (min-width: ${media.lg}) {
    padding: 0 260px;
  }
`;

export default () => (
  <City>
    <Text>Популярные направления перелетов из города</Text>{" "}
    <CitySelector>
      Москва<Edit />
    </CitySelector>
  </City>
);
