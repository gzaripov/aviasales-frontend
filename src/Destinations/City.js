import React from "react";
import styled from "styled-components";
import edit from "./edit.svg";

const Text = styled.span`
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;

const CitySelector = styled.span`
  color: #00ace2;
  font-size: 18px;
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
  padding-left: 32px;
  padding-right: 32px;
`;

export default () => (
  <City>
    <Text>Популярные направления перелетов из города</Text>{" "}
    <CitySelector>
      Москва<Edit />
    </CitySelector>
  </City>
);
