import React from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import clear from "./img/clear.svg";

const ResetFilters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;
`;

const Text = styled.p`
  color: #00bde4;
  font-size: 12px;
  text-transform: uppercase;
`;

const ResetButton = styled(Button)`
  display flex;
`;

export default () => (
  <ResetFilters>
    <Text>Сбросить все фильтры</Text>
    <ResetButton>
      <img src={clear} alt="Сбросить фильтр" />
    </ResetButton>
  </ResetFilters>
);
