import React from "react";
import styled from "styled-components";
import Category from "./Category";
import media from "../common/media";
import world from "./categories/world.svg";
import sun from "./categories/sun.svg";
import shopping from "./categories/shopping.svg";
import culture from "./categories/culture.svg";
import nightStyle from "./categories/night_style.svg";
import rest from "./categories/rest_kids.svg";

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;

  @media screen and (min-width: ${media.md}) {
    margin-top: 56px;
    justify-content: space-around;
  }
`;

export default () => (
  <div className="row">
    <div className="col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
      <Categories>
        <Category imageUrl={world} text="куда угодно" />
        <Category imageUrl={sun} text="солнце и море" />
        <Category imageUrl={shopping} text="шоппинг, город" />
        <Category imageUrl={culture} text="культура и история" />
        <Category imageUrl={nightStyle} text="ночная жизнь" />
        <Category imageUrl={rest} text="отдых с детьми" />
      </Categories>
    </div>
  </div>
);
