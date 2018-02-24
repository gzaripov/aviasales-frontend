import React from "react";
import styled from "styled-components";
import media from "../../../common/media";
import Button from "../../../common/Button";

const SearchButton = styled(Button)`
  background-color: #ff9241;
  font-weight: 900;
  font-size: 16px;
  color: #ffffff;
  border-radius: 0 0 4px 0;
  flex: 1;

  ${media.md`
    font-size: 20px;
  `};

  ${media.xl`
    border-radius: 4px;
    padding-top: 1px;
    padding-bottom: 1px;
  `};
`;

const Container = styled.div`
  margin: 1px;
  display: flex;

  ${media.sm`
    width: calc(25% - 2px);
  `};

  ${media.xl`
    padding-left:16px;
    width: calc(16.8% - 2px);
  `};
`;

export default () => (
  <Container>
    <SearchButton>Найти билеты</SearchButton>
  </Container>
);
