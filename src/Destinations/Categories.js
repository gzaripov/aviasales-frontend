import React from "react";
import styled from "styled-components";
import Category from "./Category";
import world from "./categories/world.svg";
import sun from "./categories/sun.svg";
import shopping from "./categories/shopping.svg";
import culture from "./categories/culture.svg";
import nightStyle from "./categories/night_style.svg";
import rest from "./categories/rest_kids.svg";

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 8px;
`;

const Section = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default () => (
  <Categories>
    <Section>
      <Category imageUrl={world} text="куда угодно" />
      <Category imageUrl={sun} text="солнце и море" />
      <Category imageUrl={shopping} text="шоппинг, город" />
    </Section>
    <Section>
      <Category imageUrl={culture} text="культура и история" />
      <Category imageUrl={nightStyle} text="ночная жизнь" />
      <Category imageUrl={rest} text="отдых с детьми" />
    </Section>
  </Categories>
);
