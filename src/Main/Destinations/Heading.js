import React from "react";
import styled from "styled-components";
import media from "../../common/media";
import edit from "./edit.svg";

const Text = styled.span`
  font-weight: 500;
  text-align: center;
`;

const CitySelector = styled.span`
  color: #00ace2;
  display: inline-block;
`;

const Edit = styled.img`
  margin-left: 8px;
  margin-bottom: -2px;
`;

const Heading = styled.div`
  padding: 0 40px;
  font-size: 18px;
  line-height: 24px;

  ${media.sm`
    padding: 0 100px;
  `};

  ${media.md`
    padding: 0 150px;
    font-size: 24px;
    line-height: 36px;
  `};

  ${media.lg`
    padding: 0 260px;
  `};
`;

export default () => (
  <Heading>
    <Text>Популярные направления перелетов из города</Text>{" "}
    <CitySelector>
      Москва<Edit src={edit} alt="Edit icon" />
    </CitySelector>
  </Heading>
);
