import React from "react";
import styled from "styled-components";
import Range from "./Range";
import Direction from "./Direction";
import Filter from "./Filter";

const Info = styled.div`
  padding-top: 16px;
`;

const Time = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const From = styled.p`
  line-height: 18px;
  font-size: 12px;
  margin: 0;
  color: #323333;
`;

const To = styled.p`
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  margin: 0;
`;

const Travel = styled.div`
  margin-top: 10px;
  margin-bottom: 24px;
`;

export default () => (
  <Filter title="Время в пути" opened={true}>
    <Travel>
      <Direction from="Москва" to="Барселона" />
      <Info>
        <Time>
          <From>от 04ч 20м</From>
          <To>до 24ч 11м</To>
        </Time>
        <Range />
      </Info>
    </Travel>
    <Travel>
      <Direction from="Барселона" to="Москва" />
      <Info>
        <Time>
          <From>от 04ч 10м</From>
          <To>до 14ч 11м</To>
        </Time>
        <Range />
      </Info>
    </Travel>
  </Filter>
);
